import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const json: string = core.getInput('json')
    const filter: string = core.getInput('filter')
    const filter_fn = new Function('input', filter)
    const output = JSON.stringify({
      include: JSON.parse(json).filter(filter_fn)
    })
    core.setOutput('json', output)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
