import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function test1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `test4 #6, ${name}!` };
};

app.http('test4', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: test1
});
