import { serve } from "https://deno.land/std@0.151.0/http/server.ts";
import { serveDirWithTs } from "https://deno.land/x/ts_serve@v1.3.0/mod.ts";

serve((request) => serveDirWithTs(request));
