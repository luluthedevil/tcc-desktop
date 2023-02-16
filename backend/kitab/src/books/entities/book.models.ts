import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookAPIDocument = HydratedDocument<BookAPI>;

@Schema()
export class BookAPI {
    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    publisher: string;

    @Prop()
    publishedDate: string;

    @Prop()
    previewLink: string;

    @Prop()
    description: string;

    @Prop()
    isRead: boolean;

    @Prop()
    isbn13: string;

    @Prop({ default: Date.now })
    dateAdded: Date;
}

export const BookAPISchema = SchemaFactory.createForClass(BookAPI)