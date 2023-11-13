--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Ubuntu 15.4-2.pgdg22.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-2.pgdg22.04+1)

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

--
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Calificacions; Type: TABLE; Schema: public; Owner: mklvvupj
--

CREATE TABLE public."Calificacions" (
    id integer NOT NULL,
    estudiante_id integer NOT NULL,
    curso_id integer NOT NULL,
    nota integer NOT NULL,
    fecha_registro timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Calificacions" OWNER TO mklvvupj;

--
-- Name: Calificacions_id_seq; Type: SEQUENCE; Schema: public; Owner: mklvvupj
--

CREATE SEQUENCE public."Calificacions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Calificacions_id_seq" OWNER TO mklvvupj;

--
-- Name: Calificacions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mklvvupj
--

ALTER SEQUENCE public."Calificacions_id_seq" OWNED BY public."Calificacions".id;


--
-- Name: Cursos; Type: TABLE; Schema: public; Owner: mklvvupj
--

CREATE TABLE public."Cursos" (
    id integer NOT NULL,
    nombre character varying(255),
    descripcion character varying(255),
    profesor_id integer NOT NULL,
    horario character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    departamento_id integer
);


ALTER TABLE public."Cursos" OWNER TO mklvvupj;

--
-- Name: Cursos_id_seq; Type: SEQUENCE; Schema: public; Owner: mklvvupj
--

CREATE SEQUENCE public."Cursos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cursos_id_seq" OWNER TO mklvvupj;

--
-- Name: Cursos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mklvvupj
--

ALTER SEQUENCE public."Cursos_id_seq" OWNED BY public."Cursos".id;


--
-- Name: Departamentos; Type: TABLE; Schema: public; Owner: mklvvupj
--

CREATE TABLE public."Departamentos" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Departamentos" OWNER TO mklvvupj;

--
-- Name: Departamentos_id_seq; Type: SEQUENCE; Schema: public; Owner: mklvvupj
--

CREATE SEQUENCE public."Departamentos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Departamentos_id_seq" OWNER TO mklvvupj;

--
-- Name: Departamentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mklvvupj
--

ALTER SEQUENCE public."Departamentos_id_seq" OWNED BY public."Departamentos".id;


--
-- Name: Estudiantes; Type: TABLE; Schema: public; Owner: mklvvupj
--

CREATE TABLE public."Estudiantes" (
    id integer NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    email character varying(255),
    "fechaNacimiento" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Estudiantes" OWNER TO mklvvupj;

--
-- Name: Estudiantes_id_seq; Type: SEQUENCE; Schema: public; Owner: mklvvupj
--

CREATE SEQUENCE public."Estudiantes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Estudiantes_id_seq" OWNER TO mklvvupj;

--
-- Name: Estudiantes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mklvvupj
--

ALTER SEQUENCE public."Estudiantes_id_seq" OWNED BY public."Estudiantes".id;


--
-- Name: Profesors; Type: TABLE; Schema: public; Owner: mklvvupj
--

CREATE TABLE public."Profesors" (
    id integer NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    departamento_id integer
);


ALTER TABLE public."Profesors" OWNER TO mklvvupj;

--
-- Name: Profesors_id_seq; Type: SEQUENCE; Schema: public; Owner: mklvvupj
--

CREATE SEQUENCE public."Profesors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Profesors_id_seq" OWNER TO mklvvupj;

--
-- Name: Profesors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mklvvupj
--

ALTER SEQUENCE public."Profesors_id_seq" OWNED BY public."Profesors".id;


--
-- Name: Calificacions id; Type: DEFAULT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Calificacions" ALTER COLUMN id SET DEFAULT nextval('public."Calificacions_id_seq"'::regclass);


--
-- Name: Cursos id; Type: DEFAULT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Cursos" ALTER COLUMN id SET DEFAULT nextval('public."Cursos_id_seq"'::regclass);


--
-- Name: Departamentos id; Type: DEFAULT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Departamentos" ALTER COLUMN id SET DEFAULT nextval('public."Departamentos_id_seq"'::regclass);


--
-- Name: Estudiantes id; Type: DEFAULT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Estudiantes" ALTER COLUMN id SET DEFAULT nextval('public."Estudiantes_id_seq"'::regclass);


--
-- Name: Profesors id; Type: DEFAULT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Profesors" ALTER COLUMN id SET DEFAULT nextval('public."Profesors_id_seq"'::regclass);


--
-- Data for Name: Calificacions; Type: TABLE DATA; Schema: public; Owner: mklvvupj
--

COPY public."Calificacions" (id, estudiante_id, curso_id, nota, fecha_registro, "createdAt", "updatedAt") FROM stdin;
26	1	10	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
27	1	10	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
28	1	10	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
29	1	11	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
30	1	11	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
31	1	11	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
32	1	12	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
33	1	12	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
34	1	12	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
35	1	13	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
36	1	13	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
37	1	13	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
38	1	14	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
39	1	14	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
40	1	14	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
41	1	15	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
42	1	15	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
43	1	15	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
44	1	16	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
45	1	16	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
46	1	16	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
47	1	17	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
48	1	17	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
49	1	17	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
50	2	10	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
51	2	10	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
52	2	10	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
53	2	11	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
54	2	11	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
55	2	11	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
56	2	12	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
57	2	12	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
58	2	12	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
59	2	13	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
60	2	13	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
61	2	13	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
62	2	14	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
63	2	14	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
64	2	14	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
65	2	15	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
66	2	15	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
67	2	15	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
68	2	16	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
69	2	16	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
70	2	16	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
71	2	17	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
72	2	17	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
73	2	17	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
74	3	10	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
75	3	10	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
76	3	10	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
77	3	11	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
78	3	11	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
79	3	11	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
80	3	12	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
81	3	12	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
82	3	12	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
83	3	13	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
84	3	13	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
85	3	13	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
86	3	14	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
87	3	14	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
88	3	14	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
89	2	15	6	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
90	2	15	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
91	2	15	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
92	2	16	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
93	2	16	6	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
94	2	16	7	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
95	2	17	7	2023-11-13 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
96	2	17	7	2023-11-14 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
97	2	17	6	2023-11-15 00:00:00+00	2023-11-13 06:49:45.067704+00	2023-11-13 06:49:45.067704+00
\.


--
-- Data for Name: Cursos; Type: TABLE DATA; Schema: public; Owner: mklvvupj
--

COPY public."Cursos" (id, nombre, descripcion, profesor_id, horario, "createdAt", "updatedAt", departamento_id) FROM stdin;
10	Matemáticas Básicas	Introducción a las matemáticas	6	Lunes y Miércoles 9:00 AM - 10:30 AM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	1
11	Historia Antigua	Exploración de civilizaciones antiguas	7	Martes y Jueves 2:00 PM - 3:30 PM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	2
12	Ciencias de la Naturaleza	Estudio de la biología y ecología	8	Lunes y Miércoles 11:00 AM - 12:30 PM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	3
13	Álgebra Avanzada	Exploración de álgebra avanzada	9	Martes y Jueves 9:00 AM - 10:30 AM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	1
14	Historia del Arte	Estudio de la historia del arte	10	Miércoles 3:00 PM - 5:00 PM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	2
15	Física Aplicada	Introducción a la física	11	Lunes y Viernes 10:00 AM - 11:30 AM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	3
16	Geometría Euclidiana	Estudio de la geometría	6	Martes 1:00 PM - 2:30 PM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	1
17	Historia Contemporánea	Exploración de la historia reciente	7	Jueves 2:00 PM - 4:00 PM	2023-11-13 06:39:57.626148+00	2023-11-13 06:39:57.626148+00	2
\.


--
-- Data for Name: Departamentos; Type: TABLE DATA; Schema: public; Owner: mklvvupj
--

COPY public."Departamentos" (id, nombre, "createdAt", "updatedAt") FROM stdin;
1	Matemáticas	2023-11-13 04:24:08.188421+00	2023-11-13 04:24:08.188421+00
2	Historia	2023-11-13 04:24:08.188421+00	2023-11-13 04:24:08.188421+00
3	Ciencias	2023-11-13 04:24:08.188421+00	2023-11-13 04:24:08.188421+00
\.


--
-- Data for Name: Estudiantes; Type: TABLE DATA; Schema: public; Owner: mklvvupj
--

COPY public."Estudiantes" (id, nombre, apellido, email, "fechaNacimiento", "createdAt", "updatedAt") FROM stdin;
1	Juan	López	juan.lopez@ejemplo.com	2000-01-15 00:00:00+00	2023-11-13 04:22:17.18283+00	2023-11-13 04:22:17.18283+00
2	María	González	maria.gonzalez@ejemplo.com	2001-05-22 00:00:00+00	2023-11-13 04:22:41.01971+00	2023-11-13 04:22:41.01971+00
3	Pedro	Rodríguez	pedro.rodriguez@ejemplo.com	1999-11-08 00:00:00+00	2023-11-13 04:22:41.01971+00	2023-11-13 04:22:41.01971+00
\.


--
-- Data for Name: Profesors; Type: TABLE DATA; Schema: public; Owner: mklvvupj
--

COPY public."Profesors" (id, nombre, apellido, email, "createdAt", "updatedAt", departamento_id) FROM stdin;
7	Juan	Gómez	juan.gomez@ejemplo.com	2023-11-13 04:31:10.872893+00	2023-11-13 04:31:10.872893+00	1
8	Carlos	Gómez	carlos.gomez@ejemplo.com	2023-11-13 04:31:15.283172+00	2023-11-13 04:31:15.283172+00	2
9	Elena	Fernández	elena.fernandez@ejemplo.com	2023-11-13 04:31:15.283172+00	2023-11-13 04:31:15.283172+00	2
10	Luisa	Martínez	luisa.martinez@ejemplo.com	2023-11-13 04:31:18.962708+00	2023-11-13 04:31:18.962708+00	3
11	Pedro	Rodríguez	pedro.rodriguez@ejemplo.com	2023-11-13 04:31:18.962708+00	2023-11-13 04:31:18.962708+00	3
6	Juana	Pérez	juana@utem.cl	2023-11-13 04:31:10.872893+00	2023-11-13 07:34:50.704+00	1
\.


--
-- Name: Calificacions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mklvvupj
--

SELECT pg_catalog.setval('public."Calificacions_id_seq"', 97, true);


--
-- Name: Cursos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mklvvupj
--

SELECT pg_catalog.setval('public."Cursos_id_seq"', 17, true);


--
-- Name: Departamentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mklvvupj
--

SELECT pg_catalog.setval('public."Departamentos_id_seq"', 3, true);


--
-- Name: Estudiantes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mklvvupj
--

SELECT pg_catalog.setval('public."Estudiantes_id_seq"', 3, true);


--
-- Name: Profesors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mklvvupj
--

SELECT pg_catalog.setval('public."Profesors_id_seq"', 11, true);


--
-- Name: Calificacions Calificacions_pkey; Type: CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Calificacions"
    ADD CONSTRAINT "Calificacions_pkey" PRIMARY KEY (id);


--
-- Name: Cursos Cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_pkey" PRIMARY KEY (id);


--
-- Name: Departamentos Departamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Departamentos"
    ADD CONSTRAINT "Departamentos_pkey" PRIMARY KEY (id);


--
-- Name: Estudiantes Estudiantes_pkey; Type: CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Estudiantes"
    ADD CONSTRAINT "Estudiantes_pkey" PRIMARY KEY (id);


--
-- Name: Profesors Profesors_pkey; Type: CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Profesors"
    ADD CONSTRAINT "Profesors_pkey" PRIMARY KEY (id);


--
-- Name: Calificacions Calificacions_curso_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Calificacions"
    ADD CONSTRAINT "Calificacions_curso_id_fkey" FOREIGN KEY (curso_id) REFERENCES public."Cursos"(id) ON DELETE CASCADE;


--
-- Name: Calificacions Calificacions_estudiante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Calificacions"
    ADD CONSTRAINT "Calificacions_estudiante_id_fkey" FOREIGN KEY (estudiante_id) REFERENCES public."Estudiantes"(id) ON UPDATE CASCADE;


--
-- Name: Cursos Cursos_departamento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_departamento_id_fkey" FOREIGN KEY (departamento_id) REFERENCES public."Departamentos"(id) ON UPDATE CASCADE;


--
-- Name: Cursos Cursos_profesor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_profesor_id_fkey" FOREIGN KEY (profesor_id) REFERENCES public."Profesors"(id) ON DELETE CASCADE;


--
-- Name: Profesors Profesors_departamento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mklvvupj
--

ALTER TABLE ONLY public."Profesors"
    ADD CONSTRAINT "Profesors_departamento_id_fkey" FOREIGN KEY (departamento_id) REFERENCES public."Departamentos"(id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

