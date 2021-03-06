import { runPythonScript } from "components/runPythonScript";
const handler = async (req, res) => {
  const results = await runPythonScript("scripts/JpnToHex.py", [
    req?.body?.input,
  ]);
  res.send(results);
};
export default handler;
