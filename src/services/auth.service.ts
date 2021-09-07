export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'a23sd165qw4ea23sd1a3sd13a2d1a32sd1a3sq654e65',
        user: {
          name: 'Huras',
          email: 'hurast@gmail.com.br',
        },
      });
    }, 2000);
  });
}
