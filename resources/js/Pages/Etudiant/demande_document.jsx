import Header from '../../Components/header';

import React from 'react';


const demande_document= () =>  {

  return (
<div className="bg-white">
    <Header/>

     

  <div className="relative isolate px-6 pt-14 lg:px-8">
      <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
         Demande de Document Administratif
      </h2>
  <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:pb-52 pt-15">
  <form>
    <div className="space-y-12">
      
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-lg/7 font-semibold text-gray-900">Informations Personnelles</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Assurez-vous que vos informations sont complètes et exactes.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">




          <div className="sm:col-span-5">
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email Institutionnel
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
              CIN
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
              Code Apogée
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
            Type de Document
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option hidden>Type de Document</option>
                <option>Convention de stage</option>
                <option>Attestation de Scolarité</option>
                <option>Attestation de Réussite</option>
                <option>Relevé des Notes</option>
                <option>Retrait de baccalauréat </option>
              </select>
              
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm/6 font-semibold text-gray-900">
        Annuler
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Confirmer la Demande
      </button>
    </div>
  </form>

    
        </div>
      </div>
    </div>
  )
}
export default demande_document;
