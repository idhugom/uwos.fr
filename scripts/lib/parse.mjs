/** Extrait le texte de sortie d'une réponse Responses API. */
export function extractOutputText(resp) {
  if (typeof resp.output_text === 'string' && resp.output_text.length) return resp.output_text;
  const out = resp.output || [];
  for (const item of out) {
    if (item.type === 'message' && Array.isArray(item.content)) {
      for (const c of item.content) {
        if (c.type === 'output_text' && typeof c.text === 'string') return c.text;
      }
    }
  }
  return null;
}

export function parseArticle(resp) {
  const txt = extractOutputText(resp);
  if (!txt) return { ok: false, error: 'no output_text', status: resp.status, incomplete: resp.incomplete_details };
  try {
    return { ok: true, data: JSON.parse(txt) };
  } catch (e) {
    return { ok: false, error: 'json parse: ' + e.message, raw: txt.slice(0, 500) };
  }
}
