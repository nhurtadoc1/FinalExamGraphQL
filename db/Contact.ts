import mongoose from "mongoose";
import { Contact } from "../types.ts";

const Schema = mongoose.Schema;

export type ContactModelType = mongoose.Document & Omit<Contact, "id">;

const ContactSchema = new Schema(
{
    name: {type: String, required: true},
    number: {type: String, required: true},
    nation: {type: String, required: false},
    time: {type: String, required: false},
});

export const ContactModel = mongoose.model<ContactModelType>(
    "Contact", ContactSchema
);

export default mongoose.model<ContactModelType>("ContactType", ContactSchema);