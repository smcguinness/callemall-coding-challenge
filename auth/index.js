import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

import { self } from '../service/meetup';

/* eslint-disable camelcase, no-unused-vars */

const login = async ({ access_token, token_type }) => {
  try {
    const { data } = await self(access_token);
    cookie.set('token', access_token);
    cookie.set('user', JSON.stringify(data));
  } catch (e) {
    cookie.remove('token');
    console.log('error', e);
  }
};

const logout = async () => {
  cookie.remove('token');
  cookie.remove('user');
  Router.replace('/login');
};

export { login, logout };

export default async (ctx) => {
  const { req } = ctx;
  const { token, user } = nextCookie(ctx);
  const requestedUrl = process.browser
    ? window.location.pathname
    : req.originalUrl;

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return null;
  }

  if (!token) {
    Router.push('/login');
  }

  return { token, user: JSON.parse(user) };
};
