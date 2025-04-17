import type { NextApiRequest, NextApiResponse } from 'next'
import Joi from "joi"
import mailjet from 'node-mailjet'
import assert from "node:assert"
assert(process.env.MAILJET_API_KEY, "process.env.MAILJET_API_KEY is not set")
assert(process.env.MAILJET_API_SECRET, "process.env.MAILJET_API_SECRET is not set")
const Mailjet = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET)
const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(1).required(),
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {error, value: body} = schema.validate(req.body, {abortEarly: false})
        if (error) {
            return res.status(400).send({error: error.message})
        }
        const result = await Mailjet
            .post("send", {'version': 'v3.1'})
            .request({
                "Messages":[
                    {
                        "From": {
                            "Email": "h.a.develops@gmail.com",
                            "Name": "hassan-attar.com"
                        },
                        "To": [
                            {
                                "Email": "h.a.develops@gmail.com",
                                "Name": "Hassan Attar"
                            }
                        ],
                        "Subject": `ContactMe@hassan-attar.com: Message from ${body.name}`,
                        "TextPart": `A message from ${body.name}:\n\n${body.message}\n\nReply to: ${body.email}`
                    }
                ]
            })
        res.status(200).json({message: "Your message has been sent."});
    }catch (err){
        console.error(err)
        return res.status(500).json({error: "Error sending message; Please try again later. 🙁"});
    }
}