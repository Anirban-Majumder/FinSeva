import type { NextApiRequest, NextApiResponse } from "next";

interface GetDetailsRequestBody {
  number: string;
  password: string;
  assessmentYear: string;
}

interface GetDetailsResponse {
  status: string;
  data?: {
    user: {
      number: string;
      assessmentYear: string;
      details: string;
    };
  };
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetDetailsResponse>
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  const { number, password, assessmentYear } = req.body as GetDetailsRequestBody;

  if (!number || !password || !assessmentYear) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields",
    });
  }

  try {
    // Mocked API response
    const mockResponse = {
      status: "success",
      data: {
        user: {
          number,
          assessmentYear,
          details: "Mock user data fetched successfully!",
        },
      },
    };

    // Simulate a delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(200).json(mockResponse);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
