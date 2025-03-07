import themes from 'daisyui/src/theming/themes';

const config = {
    title:'ShipFast',
    mailgun: {
        fromNoReply: `ShipFast <noreply@mg.shipfa.st>`
    },
    colors: {
        theme: 'light',
        main: themes['light']['primary']
    },
    auth: {
        loginUrl: '/api/auth/signin',
        callbackUrl: '/'
    }
};

export default config;
