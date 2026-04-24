import type { NextApiRequest, NextApiResponse } from "next";

type ContactResponse = {
	success: boolean;
	message: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ContactResponse>,
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", ["POST"]);
		return res.status(405).json({
			success: false,
			message: "Method not allowed",
		});
	}

	return res.status(200).json({
		success: true,
		message: "Contact request received",
	});
}
