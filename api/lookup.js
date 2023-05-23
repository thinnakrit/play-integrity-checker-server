const pattern = new URLPattern({ pathname: '/api/books/:id' });
 
if (pattern.test(request.url)) {
  const result = pattern.exec(request.url);
  return lookupBook(result.pathname.groups.id);
}
