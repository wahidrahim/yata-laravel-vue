export const index = (req, res, next) => {
  res.json([
    {
      task: 'test'
    }
  ])
}
