import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: (name: string) => {
        if (!name?.length || name.length <= 5) {
          new Error("Name must be at least 6 characters.");
          return false;
        }
      },
    },
    email: {
      type: String,
      required: true,
      validate: (email: string) => {
        if (!email?.length || email.length < 10) {
          new Error("Email must be at least 10 characters.");
          return false;
        }
      },
    },
    phone: {
      type: String,
      required: true,
      validate: (phone: string) => {
        if (!phone?.length || phone.length < 10) {
          new Error("Phone must be at least 10 numbers.");
          return false;
        }
      },
    },
    content: {
      type: String,
      required: true,
      validate: (content: string) => {
        if (!content?.length || content.length < 10 || content.length > 500) {
          new Error(
            "Content of message must be at least 10 characters and until 500 characters."
          );
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
