import { Message } from "@/models/message";
import { connectToDB } from "./db";

export interface MessageDocument extends Document {
  id: string;
  name: string;
  email: string;
  phone: string;
  content: string;
  createdAt: Date;
}

interface FetchMessagesResponse {
  count: number;
  messages: MessageDocument[];
}

export const fetchMessages = async (): Promise<FetchMessagesResponse> => {
  // const regex = new RegExp(q, "i"); // case insensitive

  // const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Message.find({
      // email: { $regex: regex },
    }).countDocuments();
    const messages = await Message.find({
      // email: { $regex: regex }
    });
    // .limit(ITEM_PER_PAGE)
    // .skip(ITEM_PER_PAGE * (page - 1)); //que saltee los dos items anteriores
    return { count, messages };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch messages!");
  }
};

// export const fetchMessages = async (
//   q: string
// ): Promise<FetchMessagesResponse> => {
//   const regex = new RegExp(q, "i"); // case insensitive

//  // const ITEM_PER_PAGE = 10;

//   try {
//     connectToDB();
//     const count = await Message.find({
//       email: { $regex: regex },
//     }).countDocuments();
//     const messages = await Message.find({ email: { $regex: regex } })
//      // .limit(ITEM_PER_PAGE)
//      // .skip(ITEM_PER_PAGE * (page - 1)); //que saltee los dos items anteriores
//     return { count, messages };
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch messages!");
//   }
// };

// export const fetchMessages = async (
//     q: string,
//     page: number
//   ): Promise<FetchMessagesResponse> => {
//     const regex = new RegExp(q, "i"); // case insensitive

//     const ITEM_PER_PAGE = 10;

//     try {
//       connectToDB();
//       const count = await Message.find({
//         email: { $regex: regex },
//       }).countDocuments();
//       const messages = await Message.find({ email: { $regex: regex } })
//         .limit(ITEM_PER_PAGE)
//         .skip(ITEM_PER_PAGE * (page - 1)); //que saltee los dos items anteriores
//       return { count, messages };
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch messages!");
//     }
//   };
