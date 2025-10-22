import sharp from "sharp";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { pt } from "@payloadcms/translations/languages/pt";

export default buildConfig({
  editor: lexicalEditor(),

  collections: [],
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
