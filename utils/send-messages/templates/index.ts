import { WelcomeToThePlatformTemplateType } from '../types'

export const emailWelcomeToThePlatform = ({
  name,
  password,
  phone,
}: WelcomeToThePlatformTemplateType) => {
  return `<div>
            <h4>Olá <strong>${name}</strong>, muito bem vindo a plataforma dedicado!</h4>
            <p>Sua conta foi criada e a partir de agora poderá ter acesso a melhor plataforma de serviços.</p>
            <p>Com o seu número de telefone <strong>${phone}</strong> acesse <strong>https://dedicado.digital</strong> usando a senha <strong>${password}</strong></p>
        </div>`
}
