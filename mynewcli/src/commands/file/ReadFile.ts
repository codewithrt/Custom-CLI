import {Args, Command,Flags} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/file/index.js'

export default class ReadFile extends Command {
  static args = {
   FilePath:Args.string({description:"File Path over which command to execute",required:true})
}

  static description = `Commands to be Executed Over file
   AddNullFile [Filename] -e [extension]
  `

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {
    // extension: Flags.string({char: 'e', description: 'File Extension',required:true}),
    // sentence: Flags.string({char:'s',description:"Sentence to add in File"})
    encoding: Flags.string({char:'n',description:"File Encoding"})
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(ReadFile)
    // console.log(args,flags );
    await main("ReadFile",args,flags);
    // this.log("Please Select A Command")
    // this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
