exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processMenuEntry = (entry, key) => {
    const nodeId = createNodeId(`menu-entry-${key}-${entry.link}`)
    const nodeContent = JSON.stringify(entry)

    const nodeData = Object.assign({}, entry, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'MenuEntry',
        content: nodeContent,
        contentDigest: createContentDigest(entry)
      }
    })

    return nodeData
  }

  return new Promise((resolve, reject) => {

    // check for duplicate entries per menu entry

    configOptions.menues.main.forEach(entry => {
      const nodeData = processMenuEntry(entry, 'main')
      createNode(nodeData)
    })
    resolve()
  })
}
