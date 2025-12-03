import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Tipos de formulários suportados
type FormType =
  | "contact"
  | "business"
  | "career"
  | "job"
  | "quote"
  | "newsletter"
  | "support";

interface AttachmentData {
  filename: string;
  content: string; // base64
  contentType: string;
}

interface ContactFormData {
  type?: FormType;
  name: string;
  email: string;
  phone: string;
  message?: string;
  // Campos adicionais
  company?: string;
  subject?: string;
  service?: string;
  // Campos específicos do formulário de carreira
  especialidade?: string;
  crm?: string;
  state?: string;
  city?: string;
  // Campo específico para vagas gerais
  vacancie?: string;
  attachment?: AttachmentData;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { type = "contact", name, email, phone, attachment } = body;

    // Validação básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 },
      );
    }

    // Configurar o transportador do Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verificar conexão
    await transporter.verify();

    // Configurar assunto e conteúdo baseado no tipo de formulário
    const emailConfig = getEmailConfig(type, body);

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: emailConfig.subject,
      html: emailConfig.html,
      text: emailConfig.text,
      attachments: attachment
        ? [
            {
              filename: attachment.filename,
              content: attachment.content,
              encoding: "base64" as const,
              contentType: attachment.contentType,
            },
          ]
        : undefined,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 },
    );
  }
}

// Função para configurar o e-mail baseado no tipo de formulário
function getEmailConfig(type: FormType, data: ContactFormData) {
  const {
    name,
    email,
    phone,
    message,
    company,
    subject,
    service,
    // especialidade,
    crm,
    state,
    city,
    vacancie,
  } = data;

  switch (type) {
    case "contact":
      return {
        subject: `Nova mensagem de contato - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📨 Nova Mensagem de Contato</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone/WhatsApp:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    message
                      ? `
                    <div class="field">
                      <span class="field-label">Mensagem:</span>
                      <div class="field-value">${message}</div>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Nova mensagem de contato\n\nNome: ${name}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}${message ? `\nMensagem: ${message}` : ""}`,
      };

    case "business":
      return {
        subject: `🏢 Contato Empresarial - ${company || name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>🏢 Novo Contato </h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  ${
                    company
                      ? `
                    <div class="field">
                      <span class="field-label">Empresa:</span>
                      <div class="field-value">${company}</div>
                    </div>
                  `
                      : ""
                  }
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone/WhatsApp:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    message
                      ? `
                    <div class="field">
                      <span class="field-label">Mensagem:</span>
                      <div class="field-value">${message}</div>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Novo Contato Empresarial\n\nNome: ${name}${company ? `\nEmpresa: ${company}` : ""}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}${message ? `\nMensagem: ${message}` : ""}`,
      };

    case "career":
      return {
        subject: `💼 Nova Candidatura - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
                .highlight { background-color: #faf5ff; padding: 15px; border-radius: 5px; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>💼 Nova Candidatura - Trabalhe Conosco</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone/WhatsApp:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    crm
                      ? `
                    <div class="field">
                      <span class="field-label">CRM / Conselho:</span>
                      <div class="field-value">${crm}</div>
                    </div>
                  `
                      : ""
                  }
                  ${
                    state || city
                      ? `
                    <div class="field">
                      <span class="field-label">Localização:</span>
                      <div class="field-value">${city ? city : ""}${city && state ? ", " : ""}${state ? state : ""}</div>
                    </div>
                  `
                      : ""
                  }
                  <div class="highlight">
                    <strong>📎 Currículo anexado ao e-mail</strong>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Nova Candidatura - Trabalhe Conosco\n\nNome: ${name}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}${crm ? `\nCRM/Conselho: ${crm}` : ""}${state || city ? `\nLocalização: ${city ? city : ""}${city && state ? ", " : ""}${state ? state : ""}` : ""}\n\n📎 Currículo anexado ao e-mail`,
      };

    case "job":
      return {
        subject: `💼 Nova Candidatura - ${vacancie || name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
                .highlight { background-color: #f0fff4; padding: 15px; border-radius: 5px; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>💼 Nova Candidatura</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone/WhatsApp:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    vacancie
                      ? `
                    <div class="field">
                      <span class="field-label">Vaga Pretendida:</span>
                      <div class="field-value">${vacancie}</div>
                    </div>
                  `
                      : ""
                  }
                  <div class="highlight">
                    <strong>📎 Currículo anexado ao e-mail</strong>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Nova Candidatura\n\nNome: ${name}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}${vacancie ? `\nVaga Pretendida: ${vacancie}` : ""}\n\n📎 Currículo anexado ao e-mail`,
      };

    case "quote":
      return {
        subject: `💰 Solicitação de Orçamento - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>💰 Solicitação de Orçamento</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  ${
                    company
                      ? `
                    <div class="field">
                      <span class="field-label">Empresa:</span>
                      <div class="field-value">${company}</div>
                    </div>
                  `
                      : ""
                  }
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone/WhatsApp:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    service
                      ? `
                    <div class="field">
                      <span class="field-label">Serviço:</span>
                      <div class="field-value">${service}</div>
                    </div>
                  `
                      : ""
                  }
                  ${
                    message
                      ? `
                    <div class="field">
                      <span class="field-label">Detalhes:</span>
                      <div class="field-value">${message}</div>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Solicitação de Orçamento\n\nNome: ${name}${company ? `\nEmpresa: ${company}` : ""}\nE-mail: ${email}\nTelefone: ${phone}${service ? `\nServiço: ${service}` : ""}${message ? `\nDetalhes: ${message}` : ""}`,
      };

    case "newsletter":
      return {
        subject: `📧 Nova Inscrição - Newsletter`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📧 Nova Inscrição - Newsletter</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Nova Inscrição - Newsletter\n\nNome: ${name}\nE-mail: ${email}`,
      };

    case "support":
      return {
        subject: `🆘 Solicitação de Suporte - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
                .header { background-color: #075f55; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #075f55; display: block; margin-bottom: 5px; }
                .field-value { padding: 10px; background-color: #f7fafc; border-left: 3px solid #075f55; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>🆘 Solicitação de Suporte</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="field-label">Nome:</span>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">E-mail:</span>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <span class="field-label">Telefone:</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  ${
                    subject
                      ? `
                    <div class="field">
                      <span class="field-label">Assunto:</span>
                      <div class="field-value">${subject}</div>
                    </div>
                  `
                      : ""
                  }
                  ${
                    message
                      ? `
                    <div class="field">
                      <span class="field-label">Descrição do Problema:</span>
                      <div class="field-value">${message}</div>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Solicitação de Suporte\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}${subject ? `\nAssunto: ${subject}` : ""}${message ? `\nDescrição: ${message}` : ""}`,
      };

    default:
      return getEmailConfig("contact", data);
  }
}
