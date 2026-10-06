export default async () => new Response(JSON.stringify({service:'connectUK',status:'online',time:new Date().toISOString()}),{headers:{'content-type':'application/json'}})
