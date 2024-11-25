import { exampleRepo } from "../repo/example_repo"

class ExampleService {
     test() :string {
        return exampleRepo.getExample()
    }
}

export const exampleService = new ExampleService()