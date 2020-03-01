export const index = (req, res) => {
  res.json({
    message: 'show all todos'
  })
}

export const create = (req, res) => {
  res.json({
    message: 'create new todo',
    body: req.body
  })
}

export const update = (req, res) => {
  res.send(req.params)
}

export const destroy = (req, res) => {
  res.send(req.params)
}
