import { handleNewUserRegistration } from '@/actions/userActions';
import { connectoDB } from '@/config/db';
import React from 'react'

connectoDB();

export default async function homepage() {
  await handleNewUserRegistration();

  return (
    <div>home page</div>
  )
}