--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: files; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    folder_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    size integer,
    type character varying(255)
);


--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: folders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.folders (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    parent_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: folders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.folders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: folders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.folders_id_seq OWNED BY public.folders.id;


--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Name: folders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.folders ALTER COLUMN id SET DEFAULT nextval('public.folders_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."SequelizeMeta" VALUES
	('20260111062831-create-folders.js'),
	('20260111062955-create-files.js'),
	('20260111064044-add-field-size-type-to-files.js');


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.files VALUES
	(1, 'File of Folder 1', 1, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07', 1024, 'txt'),
	(2, 'File of Folder 2', 2, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07', 1024, 'txt'),
	(3, 'File of Subfolder 1', 4, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07', 1024, 'txt'),
	(4, 'File 2 of Folder 1', 1, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07', 1024, 'txt');


--
-- Data for Name: folders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.folders VALUES
	(1, 'Folder 1', NULL, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(2, 'Folder 2', NULL, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(3, 'Folder 3', NULL, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(6, 'Subfolder 1 - 2', 1, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(4, 'Subfolder 1 - 1', 1, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(0, 'Subfolder 2 - 1', 2, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07'),
	(7, 'Subfolder of Subfolder 2', 6, '2026-01-11 19:32:00+07', '2026-01-11 19:32:00+07');


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.files_id_seq', 4, true);


--
-- Name: folders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.folders_id_seq', 7, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: folders folders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.folders
    ADD CONSTRAINT folders_pkey PRIMARY KEY (id);


--
-- Name: files files_folder_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_folder_id_fkey FOREIGN KEY (folder_id) REFERENCES public.folders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: folders folders_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.folders
    ADD CONSTRAINT folders_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.folders(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

