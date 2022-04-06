/*
 this kind of work the download work on client side with this html tag
            <div className="mt-6">
              <a href="/api/getFile/abc" download>
                test download api getfile
              </a>
            </div>
  where abc is the name files, or part of req.query params here
  the thing is when click on it,
  it work as expected in the window browser is start the download file process instead of opening a new tab
  but the file download has a problem when open it 
*/
import { NextApiRequest, NextApiResponse } from 'next'
import stream from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'
import { supabase } from '@/lib/supabase-client'

const pipeline = promisify(stream.pipeline)
const url =
  'https://pbwixwuhgtqpcyftqmgq.supabase.co/storage/v1/object/public/cheil-post/files/'

const testUrl = url + '1649271175-abc.xlsx'

const excelContentType =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method)
  if (req.method === 'GET') {
    console.log(req.query)
    // const response = await fetch(url + req.query.filename) // replace this with your API call & options
    const response = await fetch(testUrl) // replace this with your API call & options
    if (!response.ok)
      throw new Error(`unexpected response ${response.statusText}`)

    res.setHeader('Content-Type', excelContentType)
    // res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf')
    res.setHeader('Content-Disposition', 'attachment; ' + req.query.filename)

    await pipeline(response.body!, res)
  }
}

const useNodeFetch = () => {}

const useSupabase = () => {
  // const { data, error } = await supabase.storage
  //   .from('cheil-post')
  //   .download(`files/${req.query.filename}`)
  // if (error) throw new Error(`unexpected response ${response.statusText}`)
  // console.log(data)
  //???
  // const readAbleStream = new ReadableStream({})
  // await pipeline(data!, res)
}
