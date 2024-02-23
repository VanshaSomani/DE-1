let prompt = {
    img : [
        "Generate an image of a serene beach with palm trees and a sunset in the background.",
        "Create an image of a bustling marketplace with colorful stalls and people buying goods.",
        "Generate an image of a snowy mountain peak with pine trees and a clear blue sky.",
        "Create an image of a tranquil lake surrounded by autumn foliage.",
        "Generate an image of a futuristic city skyline with flying cars and towering skyscrapers.",
        "Generate an image of a magical forest with glowing mushrooms and fairies fluttering around.",
        "Create an image of an old European town square with cobblestone streets and a fountain.",
        "Generate an image of a vast desert landscape with sand dunes and a camel caravan.",
        "Create an image of a tropical rainforest with lush greenery and exotic birds.",
        "Generate an image of a charming countryside scene with rolling hills and grazing sheep."
      ],
    text : [
        "Write a short story about a character who discovers a hidden portal to another dimension.",
        "Compose a poem inspired by the changing seasons and the passage of time.",
        "Write a conversation between two friends planning a surprise birthday party.",
        "Create a dialogue between a detective and a suspect during an interrogation.",
        "Generate a product description for a new smartphone model highlighting its features and specifications.",
        "Write a blog post discussing the benefits of meditation for mental health.",
        "Continue the following story: 'The door creaked open, revealing a mysterious room filled with...'",
        "Finish the following sentence: 'As the sun set behind the mountains, she knew that...'",
        "Respond to the statement: 'If I could travel anywhere in the world, I would go to... because...'",
        "What are your thoughts on the future of artificial intelligence and its impact on society?",
        "Create a character profile for a young aspiring astronaut who dreams of exploring outer space.",
        "Describe a mythical creature that dwells deep within the enchanted forest.",
        "Imagine you wake up one day and find yourself in a world where everyone has superpowers. Describe your experience.",
        "You are stranded on a deserted island. Write a journal entry describing your first day.",
        "Share your perspective on the importance of environmental conservation and sustainable living.",
        "Express your views on the role of technology in shaping the future of education.",
        "Write a step-by-step guide on how to bake a delicious chocolate cake.",
        "Create a tutorial explaining how to play a popular card game.",
        "Write a fictional diary entry from the perspective of a soldier during World War II.",
        "Imagine you are living in ancient Egypt. Describe a typical day in your life as a noble."
      ]
}

const getImgPrompt = (req,res) => {
    res.json(prompt.img);
}

const getTextPrompt = (req,res) => {
    res.json(prompt.img);
}

module.exports = {
    getImgPrompt ,
    getTextPrompt
}