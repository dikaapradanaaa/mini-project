import React, { useState } from 'react'
import { Accordion, Container, Button, Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import { OpenAIApi, Configuration } from 'openai';

const apiKey = "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";
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);
function Faq () {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 200,
    });

    setOutput(response.data.choices[0].text);
  };

  return (
    <div className='faq'>
      <Container> 
          <h2 className='text-center'>Pertanyaan yang sering ditanyakan</h2>
          
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bagaimana memproses laporan penipuan ke PSS?</Accordion.Header>
        <Accordion.Body>
        Pelaporan dapat dilakukan ke DIKA (Asisten Digital PSS) di halaman Saya pada menu Pusat Resolusi di aplikasi PSS untuk bantuan selanjutnya.
        Pastikan laporan kamu mengandung informasi berikut:
        1. Urutan kejadian penipuan secara singkat, padat dan jelas.
        2. Melampirkan Foto/Screenshot Bukti Transfer (dapat berupa mutasi rekening yang menunjukkan tanggal dan jam transaksi ke PSS), Foto/Screenshot Chat atau Log Panggilan Telepon dengan pihak Terlapor (terduga penipu) dan/atau bukti pendukung lain yang bisa memperkuat laporan Anda.
        Customer Care kami akan menghubungi kamu untuk memverifikasi laporan tersebut dan menindaklanjuti dalam 7x24 jam sejak pelaporan dilakukan. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bagaimana memproses laporan penipuan ke PSS?</Accordion.Header>
        <Accordion.Body>
        Pelaporan dapat dilakukan ke DIKA (Asisten Digital PSS) di halaman Saya pada menu Pusat Resolusi di aplikasi PSS untuk bantuan selanjutnya.
        Pastikan laporan kamu mengandung informasi berikut:
        1. Urutan kejadian penipuan secara singkat, padat dan jelas.
        2. Melampirkan Foto/Screenshot Bukti Transfer (dapat berupa mutasi rekening yang menunjukkan tanggal dan jam transaksi ke PSS), Foto/Screenshot Chat atau Log Panggilan Telepon dengan pihak Terlapor (terduga penipu) dan/atau bukti pendukung lain yang bisa memperkuat laporan Anda.
        Customer Care kami akan menghubungi kamu untuk memverifikasi laporan tersebut dan menindaklanjuti dalam 7x24 jam sejak pelaporan dilakukan.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Bagaimana memproses laporan penipuan ke PSS?</Accordion.Header>
        <Accordion.Body>
        Pelaporan dapat dilakukan ke DIKA (Asisten Digital PSS) di halaman Saya pada menu Pusat Resolusi di aplikasi PSS untuk bantuan selanjutnya.
        Pastikan laporan kamu mengandung informasi berikut:
        1. Urutan kejadian penipuan secara singkat, padat dan jelas.
        2. Melampirkan Foto/Screenshot Bukti Transfer (dapat berupa mutasi rekening yang menunjukkan tanggal dan jam transaksi ke PSS), Foto/Screenshot Chat atau Log Panggilan Telepon dengan pihak Terlapor (terduga penipu) dan/atau bukti pendukung lain yang bisa memperkuat laporan Anda.
        Customer Care kami akan menghubungi kamu untuk memverifikasi laporan tersebut dan menindaklanjuti dalam 7x24 jam sejak pelaporan dilakukan.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Bagaimana memproses laporan penipuan ke PSS?</Accordion.Header>
        <Accordion.Body>
        Pelaporan dapat dilakukan ke DIKA (Asisten Digital PSS) di halaman Saya pada menu Pusat Resolusi di aplikasi PSS untuk bantuan selanjutnya.
        Pastikan laporan kamu mengandung informasi berikut:
        1. Urutan kejadian penipuan secara singkat, padat dan jelas.
        2. Melampirkan Foto/Screenshot Bukti Transfer (dapat berupa mutasi rekening yang menunjukkan tanggal dan jam transaksi ke PSS), Foto/Screenshot Chat atau Log Panggilan Telepon dengan pihak Terlapor (terduga penipu) dan/atau bukti pendukung lain yang bisa memperkuat laporan Anda.
        Customer Care kami akan menghubungi kamu untuk memverifikasi laporan tersebut dan menindaklanjuti dalam 7x24 jam sejak pelaporan dilakukan.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Bagaimana memproses laporan penipuan ke PSS?</Accordion.Header>
        <Accordion.Body>
        Pelaporan dapat dilakukan ke DIKA (Asisten Digital PSS) di halaman Saya pada menu Pusat Resolusi di aplikasi PSS untuk bantuan selanjutnya.
        Pastikan laporan kamu mengandung informasi berikut:
        1. Urutan kejadian penipuan secara singkat, padat dan jelas.
        2. Melampirkan Foto/Screenshot Bukti Transfer (dapat berupa mutasi rekening yang menunjukkan tanggal dan jam transaksi ke PSS), Foto/Screenshot Chat atau Log Panggilan Telepon dengan pihak Terlapor (terduga penipu) dan/atau bukti pendukung lain yang bisa memperkuat laporan Anda.
        Customer Care kami akan menghubungi kamu untuk memverifikasi laporan tersebut dan menindaklanjuti dalam 7x24 jam sejak pelaporan dilakukan.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>

      <Container className='pt-5'>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <h3>Pertanyaan Anda ?</h3>
        <Form.Control as="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3} />
      </Form.Group>
      <Button className='mb-5' size="lg" type='submit' variant="light"><BiSearchAlt/></Button>
    </Form>
    
    <h3 className=''>Jawaban Anda</h3>
    <div className='output bg-white'>
        <p id='outputData'>{output}</p>
      </div>
      
    
        
      
      
      </Container>
    </div>
  )
}

export default Faq