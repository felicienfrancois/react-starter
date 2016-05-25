class HelloService {
    
    getCompiler() : string {
        return "TypeScript";
    }
    
    getFramework() : string {
        return "React";
    }

}

export var helloService = new HelloService();