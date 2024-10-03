import express from 'express';
import { POST } from './app/api/chat/route';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await POST(req);
    response.body.pipe(res);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
