const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateImage = async (req, res) => {
	let prompt = req.body.prompt;

	try {
		const response = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: "512x512",
		});
		const imgUrl = response.data.data[0].url;

		res.status(200).json({
			success: true,
			data: imgUrl,
		});
	} catch (err) {
		if (err.response) {
			console.log(err.response.status, err.response.data);
		} else {
			console.log(err.message);
		}
		res.status(400).json({
			success: false,
			error: "Image generation failed.",
		});
	}
};

module.exports = { generateImage };
