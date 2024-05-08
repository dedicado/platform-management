import { Bedrock } from '@langchain/community/llms/bedrock'

const bedrock = new Bedrock({
  model: process.env.BEDROCK_MODEL,
  region: 'us-east-1',
  temperature: 0.6,
  maxTokens: 1024,
  credentials: {
    accessKeyId: process.env.PLATFORM_AWS_ACCESS_KEY ?? '',
    secretAccessKey: process.env.PLATFORM_AWS_PRIVATE_KEY ?? '',
  },
})

export default bedrock
