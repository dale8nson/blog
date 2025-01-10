"use server"
import * as contentful from "contentful"

const client = contentful.createClient({accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, space: process.env.CONTENTFUL_SPACE_ID as string})

export const getClient = async () => client



