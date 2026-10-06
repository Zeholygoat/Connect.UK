// Provider adapter placeholder. Keep API keys on the server, never in the browser.
export default async () => new Response(JSON.stringify({ok:true,source:'connectUK adapter',message:'Configure a provider adapter before enabling live mode.'}),{headers:{'content-type':'application/json'}})
