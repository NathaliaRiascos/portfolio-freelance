import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const EMAIL = import.meta.env.EMAIL;

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string({
        required_error: "El nombre es obligatorio",
        invalid_type_error: "El nombre debe ser texto",
      }),
      email: z
        .string({
          required_error: "El correo es obligatorio",
        })
        .email("Ingresa un correo válido"),
      subject: z
        .string({
          required_error: "El mensaje es obligatorio",
        })
        .min(6, "El mensaje debe tener al menos 6 caracteres"),
      message: z
        .string({
          required_error: "El mensaje es obligatorio",
        })
        .min(6, "El mensaje debe tener al menos 6 caracteres"),
    }),
    handler: async (input) => {
      const { name, email, message, subject } = input;

      const { data, error } = await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: [EMAIL],
        subject: `Nuevo mensaje de ${name} desde portafolio`,
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
