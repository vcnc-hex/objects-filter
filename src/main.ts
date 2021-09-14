import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const input: string = core.getInput('input')
    const filter: string = core.getInput('filter')

    const filter_fn = new Function('label', filter)
    const output = JSON.stringify(JSON.parse(input).filter(filter_fn))
    core.setOutput('json', output)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
