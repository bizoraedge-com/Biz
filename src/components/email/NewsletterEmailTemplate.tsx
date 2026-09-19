interface NewsletterEmailTemplateProps {
  email: string;
  submittedAt: string;
}

export function NewsletterEmailTemplate({
  email,
  submittedAt
}: NewsletterEmailTemplateProps) {
  return `
  <div style="font-family: 'Inter', 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 40px 20px; width: 100%;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); margin: 0 auto;">
      <tbody>
        <tr>
          <td style="background-color: #ffffff; padding: 40px 40px 30px; text-align: center; border-top: 6px solid #0052cc;">
             <img src="https://bizoraedge.com/images/logo-dark.png" alt="BizoraEdge Logo" width="180" style="display: block; margin: 0 auto; outline: none; border: none; text-decoration: none;" />
          </td>
        </tr>
        <tr>
          <td style="padding: 0 40px 20px; text-align: center;">
            <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">New Newsletter Subscriber</h1>
            <p style="font-size: 15px; color: #6b7280; margin: 10px 0 0 0;">A new user has subscribed to the BizoraEdge newsletter.</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 40px 40px;">
            <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #9ca3af; font-weight: 600; letter-spacing: 1px;">Subscriber Email</p>
                      <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #0052cc; text-decoration: none;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #9ca3af; font-weight: 600; letter-spacing: 1px;">Subscription Time</p>
                      <p style="margin: 4px 0 0 0; font-size: 14px; color: #0052cc; font-weight: 500; display: inline-block; background-color: #eff6ff; padding: 4px 10px; border-radius: 4px;">
                        ${submittedAt}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 13px; color: #9ca3af;">&copy; ${new Date().getFullYear()} BizoraEdge. All rights reserved.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `;
}
