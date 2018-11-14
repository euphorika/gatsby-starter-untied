exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processMenuEntry = (entry, key) => {
    entry.title = entry.title ? entry.title : ''
    entry.target = entry.target ? entry.target : ''

    const nodeId = createNodeId(`menu-entry-${key}-${entry.link}`)
    const nodeContent = JSON.stringify(entry)
    const nodeIdentifier = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()

    const nodeData = Object.assign({}, entry, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MenuEntry${nodeIdentifier}`,
        content: nodeContent,
        contentDigest: createContentDigest(entry)
      }
    })

    return nodeData
  }

  return new Promise((resolve, reject) => {
    for(let key in configOptions.menues) {
      configOptions.menues[key].forEach(entry => {
        const nodeData = processMenuEntry(entry, key)
        createNode(nodeData)
      })
    }

    resolve()
  })
}
