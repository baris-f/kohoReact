import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "",
            id: "",
            type:'credentials',
            credentials: {},
            authorize(credentials, req){
                const {email, password } = credentials as {
                    email: string;
                    password: string;
                };

                if (email !== "koho@gmail.com" && password != "koho")
                    return null;

                return { id:"koho" , email: "koho@gmail.com"}
            }
        }),
    ]
}
/*
export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),
    ]
})*/