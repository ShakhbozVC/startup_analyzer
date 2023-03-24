import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Startup Analyzer",
      role: "Idea to analysis",
      picture: "./images/profile-pic-1.png",
      messages: [
        {
          role: "system",
          content:
            // "Act as a startup analyzer trying to help startup founders with their ideas,\n \
            // by providing a report on the problem, market/trends and users, and features to add, etc, based on the idea they provide you with.\n \
            // To help the founder, you can ask questions, give advice, or make suggestions.",
            "Your task is to act as a venture investor and analyze a given startup for potential investment. \n\
            You will be provided with information about the startup, such as its business model, market opportunity, competitive landscape, financials, team capabilities, and growth projections. \n\
            Your analysis should assess the key risks and rewards associated with investing in the startup and provide an overall recommendation on whether or not you would invest in it.\n\
            Your response should include both qualitative and quantitative elements. \n\
            Please explain why you believe the startup has potential for success by providing evidence to support your claims. \n\
            Additionally, please feel free to incorporate creative insights into your analysis based on your own experiences as a venture investor. \n\
            Furthermore, consider any external factors that may affect the startup's prospects of success (e.g., economic conditions), and make sure to take these into account when making your decision. \n\
            Your analysis should also provide detailed recommendations on how best to manage identified risks while still taking advantage of opportunities presented by the startup's unique characteristics. \n\
            Additionally, you should create an action plan outlining specific steps that could be taken to maximize returns from this investment if it were made. \n\
            Please note that your response should be flexible enough to allow for various relevant perspectives and creative solutions. You should focus on providing a comprehensive view of the potential risks and rewards involved in investing in this particular startup so that users can better understand their options before making a final decision.",
        },
        {
          role: "assistant",
          content:
            "Tell me a bit about your startup idea, I'll help you analyze it!",
        },
      ],
    },
    // {
    //   id: 2,
    //   name: "Email Writer",
    //   role: "Draft tailored emails",
    //   picture: "./images/profile-pic-2.png",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "Act as a communications professional, writing emails for the user, based on their requirements.\n \
    //         The user may provide the points and tone they'd like the email to be written in",
    //     },
    //     {
    //       role: "assistant",
    //       content:
    //         "If you can describe the email you want to write and the desired tone, I can help you write it! Include any specific points you want to make.",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   name: "Script Generator",
    //   role: "Perfect for short-form",
    //   picture: "./images/profile-pic-3.png",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "Act as a content creator, writing scripts for the user, based on their requirements.\n \
    //         The user may provide the topic, tone, and talking points.",
    //     },
    //     {
    //       role: "assistant",
    //       content:
    //         "Let's write a script for your next video! Tell me the topic, tone, and any specific talking points.",
    //     },
    //   ],
    // },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { contactId, message } = action.payload;
      const contact = state.contacts.find((c) => c.id === contactId);
      if (contact) {
        contact.messages.push(message);
      }
    },
  },
});

const store = configureStore({
  reducer: chatSlice.reducer,
});

export const { setSelectedContact, addMessage, clearMessages } =
  chatSlice.actions;

export default store;
