import { serve } from "https://deno.land/std@0.151.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.151.0/http/file_server.ts";
import { serveDirWithTs } from "https://deno.land/x/ts_serve@v1.3.0/mod.ts";

serve((request) => {
  if (new URL(request.url).pathname === "/") {
    return serveFile(request, "./index.html");
  }
  return serveDirWithTs(request);
});
