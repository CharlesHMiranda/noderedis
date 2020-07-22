import Mail from '../lib/Mail.js';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'DevProduction <devprod@iam.dev.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo a IAM.DEV.BR. Sua senha é: ${user.password}`
        });
    }
}