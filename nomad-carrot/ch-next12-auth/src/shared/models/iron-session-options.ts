export const ironSessionOptions = {
  cookieName: "nomad-ordi-ch57-auth",
  password: "HK2CCxZ9zs5nvThQjvzWiCG2JuAaWeh20gbokP1mbbTLTZ1YBubh",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
} as const;
