import sharp from "sharp";

import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { pt } from "@payloadcms/translations/languages/pt";
import { Users } from "./collections/Users";
import path from "path";
import { fileURLToPath } from "url";
import { Media } from "./collections/Media";
import { Blog } from "./collections/Blog";
import { Categories } from "./collections/Categories";
import { NaMidia } from "./collections/NaMidia";
import { CaseDeSucesso } from "./collections/CaseDeSucesso";
import { Depoimento } from "./collections/Depoimento";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.SERVER_URL || "http://localhost:3000",
  editor: lexicalEditor(),
  cors: {
    origins: [process.env.SERVER_URL || "*"],
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Blog,
    Categories,
    NaMidia,
    CaseDeSucesso,
    Depoimento,
  ],
  i18n: {
    fallbackLanguage: "pt",
    supportedLanguages: { pt },
  },
  secret: process.env.PAYLOAD_SECRET || "",
  db: vercelPostgresAdapter(),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
