import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  parentId: {
    type: String
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread'
    }
  ]
});

// This code snippet checks if the "Thread" model has already been defined by verifying the existence of `mongoose.models.Thread`.
// If the model does not exist, it creates the "Thread" model using the `mongoose.model` function.
// The `mongoose.model` function takes two arguments: the model name, which is "Thread", and the schema definition, which is `threadSchema`.
// This pattern ensures that the "Thread" model is defined only once, even if this module is imported multiple times in different parts of the application.
// It prevents conflicts and unnecessary redefinition of the model.
// This approach is commonly used when working with Mongoose models in a Node.js and TypeScript environment.
// It enables the creation of a model based on a schema definition, promoting consistency and reusability throughout the application.
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);
export default Thread;
