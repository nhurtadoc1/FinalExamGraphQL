import { GraphQLError } from "graphql";
import { ContactModel, ContactModelType } from "../db/Contact.ts"

export const Mutation = {
    addContact: async (
        _: unknown,
        args: { name: string, number: string }
    ): Promise<ContactModelType> => {
        const contact = {
            name: args.name,
            number: args.number,
        }
        const newContact = await ContactModel.create(contact);
        return newContact;
    },
    deleteContact: async (
        _: unknown,
        args: { id: string }
    ): Promise<ContactModelType> => {
        const contact = await ContactModel.findByIdAndDelete(args.id);
        if(!contact) {
            throw new GraphQLError(`No contact found with id ${args.id}` , {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    },
};