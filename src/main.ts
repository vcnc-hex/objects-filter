import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const input: string = core.getInput('input')
    const filter: string = core.getInput('filter')

    const filter_fn = new Function(filter)
    core.setOutput('json', JSON.stringify(JSON.parse(input).filter(filter_fn)))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
