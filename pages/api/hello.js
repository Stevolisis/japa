
export default function handler(req, res) {

  try {
    res.status(200).json({
      name: 'John Doe',
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ errMessage: err.message });
  }
}
