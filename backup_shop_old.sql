--
-- PostgreSQL database dump
--

\restrict HvtTYxr8tRuL9RifCiGpoluq8EMN7pgs9xksC7QksyYBkzFXsIdq0Dp6BQ1OkEz

-- Dumped from database version 16.13
-- Dumped by pg_dump version 18.3 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: FilterWord; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FilterWord" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    word text NOT NULL,
    "addedById" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."FilterWord" OWNER TO postgres;

--
-- Name: GuildConfig; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GuildConfig" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "welcomeChannelId" text,
    "logsChannelId" text,
    "visitorRoleId" text,
    "aspirantRoleId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "aquarisRoleId" text,
    "coLiderRoleId" text,
    "liderRoleId" text,
    "recruitmentCategoryId" text,
    "staffRoleId" text,
    "suggestionsChannelId" text,
    "boostChannelId" text,
    "levelUpChannelId" text,
    "logsAutomodChannelId" text,
    "logsJoinsChannelId" text,
    "logsLeavesChannelId" text,
    "logsModChannelId" text,
    "logsRecruitChannelId" text,
    "shopCategoryId" text,
    "shopStaffChannelId" text
);


ALTER TABLE public."GuildConfig" OWNER TO postgres;

--
-- Name: ModerationLog; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ModerationLog" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "targetId" text NOT NULL,
    "moderatorId" text NOT NULL,
    type text NOT NULL,
    reason text,
    duration integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ModerationLog" OWNER TO postgres;

--
-- Name: NicknameRole; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."NicknameRole" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "roleId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."NicknameRole" OWNER TO postgres;

--
-- Name: RecruitmentTicket; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RecruitmentTicket" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "userId" text NOT NULL,
    "minecraftRole" text,
    status text DEFAULT 'OPEN'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    answers jsonb,
    "channelId" text,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."RecruitmentTicket" OWNER TO postgres;

--
-- Name: Reminder; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Reminder" (
    id text NOT NULL,
    "userId" text NOT NULL,
    "guildId" text NOT NULL,
    message text NOT NULL,
    "triggerAt" timestamp(3) without time zone NOT NULL,
    "intervalMin" integer,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Reminder" OWNER TO postgres;

--
-- Name: ShopAppliedDiscount; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopAppliedDiscount" (
    id text NOT NULL,
    "discountPolicyId" text,
    "orderId" text,
    "orderItemId" text,
    scope text NOT NULL,
    "discountType" text NOT NULL,
    "discountValue" numeric(65,30) NOT NULL,
    "discountAmount" numeric(65,30) NOT NULL,
    reason text,
    "appliedByUserId" text,
    "appliedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ShopAppliedDiscount" OWNER TO postgres;

--
-- Name: ShopDiscountPolicy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopDiscountPolicy" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    name text NOT NULL,
    description text,
    "policyType" text NOT NULL,
    scope text NOT NULL,
    "discountType" text NOT NULL,
    "discountValue" numeric(65,30) NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    priority integer DEFAULT 0 NOT NULL,
    "startsAt" timestamp(3) without time zone,
    "endsAt" timestamp(3) without time zone,
    "createdByUserId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "productId" text,
    "minQuantity" integer
);


ALTER TABLE public."ShopDiscountPolicy" OWNER TO postgres;

--
-- Name: ShopInventory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopInventory" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "materialId" text NOT NULL,
    "currentStock" integer DEFAULT 0 NOT NULL,
    "reservedStock" integer DEFAULT 0 NOT NULL,
    "minStockAlert" integer DEFAULT 0 NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."ShopInventory" OWNER TO postgres;

--
-- Name: ShopInventoryMovement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopInventoryMovement" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "materialId" text NOT NULL,
    "movementType" text NOT NULL,
    quantity integer NOT NULL,
    reason text,
    "relatedOrderId" text,
    "performedById" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ShopInventoryMovement" OWNER TO postgres;

--
-- Name: ShopMaterial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopMaterial" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    name text NOT NULL,
    "baseUnit" text DEFAULT 'item'::text NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "stackSize" integer DEFAULT 64 NOT NULL
);


ALTER TABLE public."ShopMaterial" OWNER TO postgres;

--
-- Name: ShopOrder; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopOrder" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "orderCode" text NOT NULL,
    "customerUserId" text NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    "ticketChannelId" text,
    "staffChannelId" text,
    "acceptedByUserId" text,
    "rejectedByUserId" text,
    "closedByUserId" text,
    "rejectionReason" text,
    "cancelReason" text,
    "subtotalAmount" numeric(65,30) DEFAULT 0 NOT NULL,
    "totalAmount" numeric(65,30) DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "acceptedAt" timestamp(3) without time zone,
    "rejectedAt" timestamp(3) without time zone,
    "closedAt" timestamp(3) without time zone,
    "cancelledAt" timestamp(3) without time zone,
    "totalDiscountAmount" numeric(65,30) DEFAULT 0 NOT NULL
);


ALTER TABLE public."ShopOrder" OWNER TO postgres;

--
-- Name: ShopOrderEvent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopOrderEvent" (
    id text NOT NULL,
    "orderId" text NOT NULL,
    "eventType" text NOT NULL,
    "oldStatus" text,
    "newStatus" text,
    "performedById" text,
    notes text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ShopOrderEvent" OWNER TO postgres;

--
-- Name: ShopOrderItem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopOrderItem" (
    id text NOT NULL,
    "orderId" text NOT NULL,
    "productId" text NOT NULL,
    quantity integer NOT NULL,
    "unitPrice" numeric(65,30) NOT NULL,
    "grossLineTotal" numeric(65,30) NOT NULL,
    "reservedQuantity" integer DEFAULT 0 NOT NULL,
    "deliveredQuantity" integer DEFAULT 0 NOT NULL,
    notes text,
    "netLineTotal" numeric(65,30) DEFAULT 0 NOT NULL
);


ALTER TABLE public."ShopOrderItem" OWNER TO postgres;

--
-- Name: ShopProduct; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopProduct" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    name text NOT NULL,
    "productType" text NOT NULL,
    category text DEFAULT 'general'::text NOT NULL,
    subcategory text DEFAULT 'otros'::text NOT NULL,
    description text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "baseMaterialId" text,
    "presentationLabel" text,
    "presentationQuantity" integer DEFAULT 1 NOT NULL,
    "presentationType" text DEFAULT 'custom'::text NOT NULL
);


ALTER TABLE public."ShopProduct" OWNER TO postgres;

--
-- Name: ShopProductComponent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopProductComponent" (
    id text NOT NULL,
    "productId" text NOT NULL,
    "materialId" text NOT NULL,
    "quantityRequired" integer NOT NULL
);


ALTER TABLE public."ShopProductComponent" OWNER TO postgres;

--
-- Name: ShopProductPrice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopProductPrice" (
    id text NOT NULL,
    "productId" text NOT NULL,
    price numeric(65,30) NOT NULL,
    currency text DEFAULT '$'::text NOT NULL,
    "validFrom" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "validTo" timestamp(3) without time zone,
    "changedByUserId" text
);


ALTER TABLE public."ShopProductPrice" OWNER TO postgres;

--
-- Name: ShopSale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopSale" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "orderId" text NOT NULL,
    "buyerUserId" text NOT NULL,
    "registeredById" text NOT NULL,
    "totalAmount" numeric(65,30) NOT NULL,
    "soldAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ShopSale" OWNER TO postgres;

--
-- Name: ShopUser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopUser" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "discordUserId" text NOT NULL,
    username text NOT NULL,
    "displayName" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "isStaff" boolean DEFAULT false NOT NULL
);


ALTER TABLE public."ShopUser" OWNER TO postgres;

--
-- Name: ShopWithdrawal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ShopWithdrawal" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "materialId" text NOT NULL,
    quantity integer NOT NULL,
    reason text NOT NULL,
    "performedById" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ShopWithdrawal" OWNER TO postgres;

--
-- Name: Suggestion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Suggestion" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "userId" text NOT NULL,
    content text NOT NULL,
    status text DEFAULT 'PENDING'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "messageId" text
);


ALTER TABLE public."Suggestion" OWNER TO postgres;

--
-- Name: UserActivity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserActivity" (
    id text NOT NULL,
    "guildId" text NOT NULL,
    "userId" text NOT NULL,
    xp integer DEFAULT 0 NOT NULL,
    level integer DEFAULT 0 NOT NULL,
    "messageCount" integer DEFAULT 0 NOT NULL,
    "voiceMinutes" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."UserActivity" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: FilterWord; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FilterWord" (id, "guildId", word, "addedById", "createdAt") FROM stdin;
\.


--
-- Data for Name: GuildConfig; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."GuildConfig" (id, "guildId", "welcomeChannelId", "logsChannelId", "visitorRoleId", "aspirantRoleId", "createdAt", "updatedAt", "aquarisRoleId", "coLiderRoleId", "liderRoleId", "recruitmentCategoryId", "staffRoleId", "suggestionsChannelId", "boostChannelId", "levelUpChannelId", "logsAutomodChannelId", "logsJoinsChannelId", "logsLeavesChannelId", "logsModChannelId", "logsRecruitChannelId", "shopCategoryId", "shopStaffChannelId") FROM stdin;
cmnjs6oh50000fs7tuo03qd5e	1486504829755850764	1486509677830340628	1486512921755254954	1487588488344899744	1487588201190133844	2026-04-04 03:36:42.089	2026-04-04 19:45:11.482	\N	\N	\N	\N	\N	1486506281601601608	\N	\N	1486512921755254954	\N	\N	1486512921755254954	\N	1490074728470417543	1490073584864071932
\.


--
-- Data for Name: ModerationLog; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ModerationLog" (id, "guildId", "targetId", "moderatorId", type, reason, duration, "createdAt") FROM stdin;
cmnkqvkko0009o57tiz7oq8a9	1486504829755850764	445944671441649666	586140737767211043	WARN	gay	\N	2026-04-04 19:47:50.376
cmnl87ggx000e687t2zfnvd43	1486504829755850764	445944671441649666	586140737767211043	WARN	no gay	\N	2026-04-05 03:52:58.401
\.


--
-- Data for Name: NicknameRole; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."NicknameRole" (id, "guildId", "roleId", "createdAt") FROM stdin;
\.


--
-- Data for Name: RecruitmentTicket; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RecruitmentTicket" (id, "guildId", "userId", "minecraftRole", status, "createdAt", answers, "channelId", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Reminder; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Reminder" (id, "userId", "guildId", message, "triggerAt", "intervalMin", active, "createdAt") FROM stdin;
\.


--
-- Data for Name: ShopAppliedDiscount; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopAppliedDiscount" (id, "discountPolicyId", "orderId", "orderItemId", scope, "discountType", "discountValue", "discountAmount", reason, "appliedByUserId", "appliedAt") FROM stdin;
cmnl8nf4900086y7tz2ts0jni	cmnl82fog0001687txatlg3ga	cmnl8mxoj00026y7toge9oo41	cmnl8mxon00036y7twgsr21ek	item	percent	5.000000000000000000000000000000	5000.000000000000000000000000000000	Cofre doble de piedra 20+	cmnkmtl2x0000977tcj227xbb	2026-04-05 04:05:23.145
cmnl99g7g0008vg7t0114ubau	cmnl82fog0001687txatlg3ga	cmnl985750001vg7ti0v9m2qv	cmnl9857b0002vg7tzej9r7fg	item	percent	5.000000000000000000000000000000	2500.000000000000000000000000000000	Cofre doble de piedra 20+	cmnkmtl2x0000977tcj227xbb	2026-04-05 04:22:30.988
cmnm74upl000ixu7t3mmpl5qm	cmnl82fog0001687txatlg3ga	cmnm74jc4000cxu7t3eioahht	cmnm74jc8000dxu7tsu14y4av	item	percent	5.000000000000000000000000000000	1000.000000000000000000000000000000	Cofre doble de piedra 20+	cmnkznutr0000297tdc6yr3xf	2026-04-05 20:10:43.449
\.


--
-- Data for Name: ShopDiscountPolicy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopDiscountPolicy" (id, "guildId", name, description, "policyType", scope, "discountType", "discountValue", "isActive", priority, "startsAt", "endsAt", "createdByUserId", "createdAt", "productId", "minQuantity") FROM stdin;
cmnl82fog0001687txatlg3ga	1486504829755850764	Cofre doble de piedra 20+	\N	volume	item	percent	5.000000000000000000000000000000	t	10	\N	\N	cmnkmtl2x0000977tcj227xbb	2026-04-05 03:49:04.096	cmnksxwal001wwk7t03vaya3f	20
\.


--
-- Data for Name: ShopInventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopInventory" (id, "guildId", "materialId", "currentStock", "reservedStock", "minStockAlert", "updatedAt") FROM stdin;
cmnkwzmyc0002wr7tjbxcp0sj	1486504829755850764	cmnkwzmy80001wr7turbyxsz5	3	0	2	2026-04-04 22:38:57.776
cmnkwzmyy0005wr7tx0p56632	1486504829755850764	cmnkwzmyw0004wr7taqpxictf	2	0	2	2026-04-04 22:38:57.8
cmnkwzmz80008wr7tkji0ua9m	1486504829755850764	cmnkwzmz70007wr7ti6vdnlja	2	0	2	2026-04-04 22:38:57.811
cmnkwzmzj000bwr7tf4iydwaf	1486504829755850764	cmnkwzmzi000awr7tbyhhetv6	1	0	2	2026-04-04 22:38:57.822
cmnkwzmzr000ewr7th82rjsyu	1486504829755850764	cmnkwzmzq000dwr7ttr61ntpw	2	0	2	2026-04-04 22:38:57.83
cmnkwzn00000hwr7t4sjjco62	1486504829755850764	cmnkwzmzz000gwr7txy9zm5ff	2	0	2	2026-04-04 22:38:57.839
cmnkwzn0d000kwr7ty3i3f59o	1486504829755850764	cmnkwzn0b000jwr7t29irbsx2	2	0	2	2026-04-04 22:38:57.851
cmnkwzn0s000nwr7tvpgtr1lr	1486504829755850764	cmnkwzn0r000mwr7t0mr2pjg7	1	0	2	2026-04-04 22:38:57.867
cmnkwzn16000qwr7tg3yn2wha	1486504829755850764	cmnkwzn14000pwr7tp5afq5hl	1	0	2	2026-04-04 22:38:57.88
cmnkwzn1l000twr7ti7pvfbpj	1486504829755850764	cmnkwzn1k000swr7tpean9nu4	10	0	2	2026-04-04 22:38:57.896
cmnkwzn1y000wwr7t9vtmbce5	1486504829755850764	cmnkwzn1x000vwr7tijf4f1n3	8	0	2	2026-04-04 22:38:57.909
cmnkwzn29000zwr7tcfzmau8y	1486504829755850764	cmnkwzn27000ywr7tke7au9sw	6	0	2	2026-04-04 22:38:57.919
cmnkwzn2n0012wr7t7rwr0r9a	1486504829755850764	cmnkwzn2m0011wr7t61sety6x	5	0	2	2026-04-04 22:38:57.934
cmnkwzn330015wr7tq36rz1ca	1486504829755850764	cmnkwzn310014wr7t9j6x5axs	8	0	2	2026-04-04 22:38:57.949
cmnkwzn3g0018wr7tkyfpleqm	1486504829755850764	cmnkwzn3f0017wr7t83n9rkhn	12	0	2	2026-04-04 22:38:57.963
cmnkwzn45001ewr7t9qjy3mbf	1486504829755850764	cmnkwzn44001dwr7t87r6yjrh	40	0	2	2026-04-04 22:38:57.988
cmnkwzn4j001hwr7tswtqvv9r	1486504829755850764	cmnkwzn4i001gwr7t1zn4lp1n	40	0	2	2026-04-04 22:38:58.002
cmnkwzn4v001kwr7toblz614o	1486504829755850764	cmnkwzn4t001jwr7tlij5tqra	35	0	2	2026-04-04 22:38:58.013
cmnkwzn59001nwr7tgt470skj	1486504829755850764	cmnkwzn57001mwr7tl85gg8hh	30	0	2	2026-04-04 22:38:58.027
cmnkwzn5m001qwr7tyakyut31	1486504829755850764	cmnkwzn5k001pwr7tw8rriotj	30	0	2	2026-04-04 22:38:58.04
cmnkwzn62001twr7thvte7qum	1486504829755850764	cmnkwzn60001swr7tzxoi8wbk	1	0	2	2026-04-04 22:38:58.056
cmnkwzn6h001wwr7tak3jbf8y	1486504829755850764	cmnkwzn6f001vwr7tdybbjt89	1	0	2	2026-04-04 22:38:58.071
cmnkwzn6v001zwr7tf6albyrt	1486504829755850764	cmnkwzn6t001ywr7ty010m3v3	1	0	2	2026-04-04 22:38:58.085
cmnkwzn790022wr7tfxqu5aen	1486504829755850764	cmnkwzn770021wr7tgxad7xr1	3	0	2	2026-04-04 22:38:58.099
cmnkwzn7r0025wr7toi6gwf4l	1486504829755850764	cmnkwzn7o0024wr7tg005jqw9	2	0	2	2026-04-04 22:38:58.116
cmnkwzn890028wr7tf4wsdh2p	1486504829755850764	cmnkwzn880027wr7thj47iznv	2	0	2	2026-04-04 22:38:58.136
cmnkwzn8r002bwr7t66zkfli7	1486504829755850764	cmnkwzn8p002awr7tjpigrqfs	2	0	2	2026-04-04 22:38:58.153
cmnkwzn95002ewr7tcym09kwu	1486504829755850764	cmnkwzn93002dwr7tpcrowelq	1	0	2	2026-04-04 22:38:58.167
cmnkwzn9m002hwr7tkpmbdiar	1486504829755850764	cmnkwzn9k002gwr7txev989bv	1	0	2	2026-04-04 22:38:58.184
cmnkwzna4002kwr7t3iyw1ene	1486504829755850764	cmnkwzna1002jwr7tq55t9e3d	1	0	2	2026-04-04 22:38:58.201
cmnkwznbc002twr7t5y2scb0u	1486504829755850764	cmnkwznbb002swr7t07mcc65r	2	0	2	2026-04-04 22:38:58.247
cmnkwznbs002wwr7t17736ehc	1486504829755850764	cmnkwznbq002vwr7tzw1hblqo	2	0	2	2026-04-04 22:38:58.262
cmnkwznc9002zwr7t7gxm16n5	1486504829755850764	cmnkwznc7002ywr7t5tqh0p6k	2	0	2	2026-04-04 22:38:58.279
cmnkwzncs0032wr7tvw6gxsyc	1486504829755850764	cmnkwzncp0031wr7tek1ooeh1	2	0	2	2026-04-04 22:38:58.297
cmnkwznd60035wr7tc6i6p2pn	1486504829755850764	cmnkwznd50034wr7ts8wy03sj	3	0	2	2026-04-04 22:38:58.313
cmnkwzndi0038wr7tpy5euoxk	1486504829755850764	cmnkwzndh0037wr7t4mdcvwrn	10	0	2	2026-04-04 22:38:58.325
cmnkwzndu003bwr7tje1wxndh	1486504829755850764	cmnkwzndt003awr7t9dv01lcs	10	0	2	2026-04-04 22:38:58.337
cmnkwzne9003ewr7t0h15b3vj	1486504829755850764	cmnkwzne7003dwr7trdprtx03	10	0	2	2026-04-04 22:38:58.351
cmnkwznem003hwr7t4nb3n79v	1486504829755850764	cmnkwznej003gwr7tqa2bv7kj	8	0	2	2026-04-04 22:38:58.363
cmnkwznf1003kwr7tx6cgkfw9	1486504829755850764	cmnkwznez003jwr7t4a9dsenl	8	0	2	2026-04-04 22:38:58.379
cmnkwznfh003nwr7t5s1wf0bf	1486504829755850764	cmnkwznff003mwr7t3a28qpba	6	0	2	2026-04-04 22:38:58.395
cmnkwznfy003qwr7twxzsdtoh	1486504829755850764	cmnkwznfw003pwr7tonw4j8b6	5	0	2	2026-04-04 22:38:58.412
cmnkwznge003twr7tua9npfqq	1486504829755850764	cmnkwzngd003swr7tklljhygo	6	0	2	2026-04-04 22:38:58.429
cmnkwznak002nwr7tq5tyzzvq	1486504829755850764	cmnkwznai002mwr7tsizge2xk	800	0	2	2026-04-05 02:57:16.237
cmnkwznay002qwr7tnvqv0sh4	1486504829755850764	cmnkwznax002pwr7tk2rc2ot0	0	0	2	2026-04-05 04:11:07.805
cmnkwzn3s001bwr7th6yhzg3a	1486504829755850764	cmnkwzn3q001awr7trei3rz7f	60	0	2	2026-04-05 05:45:42.436
\.


--
-- Data for Name: ShopInventoryMovement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopInventoryMovement" (id, "guildId", "materialId", "movementType", quantity, reason, "relatedOrderId", "performedById", "createdAt") FROM stdin;
cmnkwzmyl0003wr7t1nrfljv8	1486504829755850764	cmnkwzmy80001wr7turbyxsz5	stock_add	3	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.789
cmnkwzmz10006wr7t59n7j4x8	1486504829755850764	cmnkwzmyw0004wr7taqpxictf	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.805
cmnkwzmzb0009wr7tvwhg4rjn	1486504829755850764	cmnkwzmz70007wr7ti6vdnlja	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.815
cmnkwzmzm000cwr7tijx9gpvm	1486504829755850764	cmnkwzmzi000awr7tbyhhetv6	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.826
cmnkwzmzt000fwr7tw9rpiap9	1486504829755850764	cmnkwzmzq000dwr7ttr61ntpw	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.833
cmnkwzn03000iwr7tc2pzp4qh	1486504829755850764	cmnkwzmzz000gwr7txy9zm5ff	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.843
cmnkwzn0j000lwr7ttwlgncjo	1486504829755850764	cmnkwzn0b000jwr7t29irbsx2	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.859
cmnkwzn0v000owr7txo6mhm7h	1486504829755850764	cmnkwzn0r000mwr7t0mr2pjg7	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.871
cmnkwzn1b000rwr7t2tuvc933	1486504829755850764	cmnkwzn14000pwr7tp5afq5hl	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.887
cmnkwzn1p000uwr7t0c8y61mu	1486504829755850764	cmnkwzn1k000swr7tpean9nu4	stock_add	10	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.901
cmnkwzn21000xwr7tzpllr2tm	1486504829755850764	cmnkwzn1x000vwr7tijf4f1n3	stock_add	8	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.913
cmnkwzn2d0010wr7tfsi53pjc	1486504829755850764	cmnkwzn27000ywr7tke7au9sw	stock_add	6	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.925
cmnkwzn2s0013wr7t2bz6zntq	1486504829755850764	cmnkwzn2m0011wr7t61sety6x	stock_add	5	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.94
cmnkwzn370016wr7tizzo6f0p	1486504829755850764	cmnkwzn310014wr7t9j6x5axs	stock_add	8	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.955
cmnkwzn3i0019wr7tz0tau98x	1486504829755850764	cmnkwzn3f0017wr7t83n9rkhn	stock_add	12	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.966
cmnkwzn3v001cwr7tbla6t3fw	1486504829755850764	cmnkwzn3q001awr7trei3rz7f	stock_add	6	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.979
cmnkwzn4a001fwr7todmsf9qt	1486504829755850764	cmnkwzn44001dwr7t87r6yjrh	stock_add	40	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:57.994
cmnkwzn4l001iwr7tqfajl3dt	1486504829755850764	cmnkwzn4i001gwr7t1zn4lp1n	stock_add	40	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.005
cmnkwzn4z001lwr7tryux0tt7	1486504829755850764	cmnkwzn4t001jwr7tlij5tqra	stock_add	35	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.019
cmnkwzn5b001owr7t9zy66b1l	1486504829755850764	cmnkwzn57001mwr7tl85gg8hh	stock_add	30	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.031
cmnkwzn5q001rwr7t24chmmub	1486504829755850764	cmnkwzn5k001pwr7tw8rriotj	stock_add	30	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.046
cmnkwzn67001uwr7tyc0zemwu	1486504829755850764	cmnkwzn60001swr7tzxoi8wbk	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.063
cmnkwzn6k001xwr7tqf49hkmy	1486504829755850764	cmnkwzn6f001vwr7tdybbjt89	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.077
cmnkwzn6z0020wr7thpgeaynl	1486504829755850764	cmnkwzn6t001ywr7ty010m3v3	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.091
cmnkwzn7e0023wr7tc1xzk7qa	1486504829755850764	cmnkwzn770021wr7tgxad7xr1	stock_add	3	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.106
cmnkwzn7w0026wr7toe1e21zc	1486504829755850764	cmnkwzn7o0024wr7tg005jqw9	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.124
cmnkwzn8e0029wr7t7xd1xyji	1486504829755850764	cmnkwzn880027wr7thj47iznv	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.142
cmnkwzn8v002cwr7tpks5xoo3	1486504829755850764	cmnkwzn8p002awr7tjpigrqfs	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.159
cmnkwzn99002fwr7tuamdvg28	1486504829755850764	cmnkwzn93002dwr7tpcrowelq	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.173
cmnkwzn9r002iwr7tvyogcroh	1486504829755850764	cmnkwzn9k002gwr7txev989bv	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.191
cmnkwzna7002lwr7thhty9x3k	1486504829755850764	cmnkwzna1002jwr7tq55t9e3d	stock_add	1	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.207
cmnkwznao002owr7tcusckb9k	1486504829755850764	cmnkwznai002mwr7tsizge2xk	stock_add	3	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.224
cmnkwznb2002rwr7t715gmbcx	1486504829755850764	cmnkwznax002pwr7tk2rc2ot0	stock_add	3	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.239
cmnkwznbf002uwr7t5u5j25lc	1486504829755850764	cmnkwznbb002swr7t07mcc65r	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.251
cmnkwznbx002xwr7t43txz8z8	1486504829755850764	cmnkwznbq002vwr7tzw1hblqo	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.269
cmnkwznce0030wr7tbg7e90kd	1486504829755850764	cmnkwznc7002ywr7t5tqh0p6k	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.286
cmnkwzncx0033wr7t2mdloo00	1486504829755850764	cmnkwzncp0031wr7tek1ooeh1	stock_add	2	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.305
cmnkwznd90036wr7tz7z32q1d	1486504829755850764	cmnkwznd50034wr7ts8wy03sj	stock_add	3	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.317
cmnkwzndl0039wr7ti6qtg5on	1486504829755850764	cmnkwzndh0037wr7t4mdcvwrn	stock_add	10	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.329
cmnkwzndy003cwr7ttvvsoydi	1486504829755850764	cmnkwzndt003awr7t9dv01lcs	stock_add	10	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.342
cmnkwznec003fwr7tou8pks1n	1486504829755850764	cmnkwzne7003dwr7trdprtx03	stock_add	10	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.356
cmnkwznep003iwr7tdg4crjjw	1486504829755850764	cmnkwznej003gwr7tqa2bv7kj	stock_add	8	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.369
cmnkwznf4003lwr7tcy0mqv86	1486504829755850764	cmnkwznez003jwr7t4a9dsenl	stock_add	8	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.384
cmnkwznfm003owr7tilae94wv	1486504829755850764	cmnkwznff003mwr7t3a28qpba	stock_add	6	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.402
cmnkwzng3003rwr7tvrgsxox8	1486504829755850764	cmnkwznfw003pwr7tonw4j8b6	stock_add	5	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.419
cmnkwzngj003uwr7tqb5db72o	1486504829755850764	cmnkwzngd003swr7tklljhygo	stock_add	6	Creado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 22:38:58.435
cmnkz48bt0004hz7tbbh8mezv	1486504829755850764	cmnkwznai002mwr7tsizge2xk	manual_adjustment	797	Importado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-04 23:38:31.337
cmnkz4c9e0006hz7t6anfnk05	1486504829755850764	cmnkwznai002mwr7tsizge2xk	reserve	600	Pedido AQ-H4MEV1	cmnkympnj0001sa7tb6tureph	cmnkmtl2x0000977tcj227xbb	2026-04-04 23:38:36.434
cmnkz4c9k0007hz7tekr7fhk9	1486504829755850764	cmnkwznai002mwr7tsizge2xk	sale	600	Venta pedido AQ-H4MEV1	cmnkympnj0001sa7tb6tureph	cmnkmtl2x0000977tcj227xbb	2026-04-04 23:38:36.44
cmnl67tn30007297tgxn4ywju	1486504829755850764	cmnkwznai002mwr7tsizge2xk	manual_adjustment	600	Importado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-05 02:57:16.239
cmnl8ujie000e6y7tsrcog0cu	1486504829755850764	cmnkwznax002pwr7tk2rc2ot0	manual_adjustment	9999997	Importado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-05 04:10:55.43
cmnl8ut1y000g6y7typyuu3gw	1486504829755850764	cmnkwznax002pwr7tk2rc2ot0	reserve	10000000	Pedido AQ-HI80YV	cmnl8mxoj00026y7toge9oo41	cmnkmtl2x0000977tcj227xbb	2026-04-05 04:11:07.798
cmnl8ut28000h6y7tguxf7ep3	1486504829755850764	cmnkwznax002pwr7tk2rc2ot0	sale	10000000	Venta pedido AQ-HI80YV	cmnl8mxoj00026y7toge9oo41	cmnkmtl2x0000977tcj227xbb	2026-04-05 04:11:07.808
cmnlc87u6000ih47tlb9tud3v	1486504829755850764	cmnkwzn3q001awr7trei3rz7f	manual_adjustment	94	Importado desde Google Sheets	\N	cmnkmtl2x0000977tcj227xbb	2026-04-05 05:45:32.334
cmnlc8fml000kh47tfctc2x9w	1486504829755850764	cmnkwzn3q001awr7trei3rz7f	reserve	40	Pedido AQ-ORHOI9	cmnlc2u0v000bh47tvgga3x1i	cmnkmtl2x0000977tcj227xbb	2026-04-05 05:45:42.429
cmnlc8fmt000lh47ti5n32evl	1486504829755850764	cmnkwzn3q001awr7trei3rz7f	sale	40	Venta pedido AQ-ORHOI9	cmnlc2u0v000bh47tvgga3x1i	cmnkmtl2x0000977tcj227xbb	2026-04-05 05:45:42.437
\.


--
-- Data for Name: ShopMaterial; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopMaterial" (id, "guildId", name, "baseUnit", "isActive", "createdAt", "updatedAt", "stackSize") FROM stdin;
cmnkwzmy80001wr7turbyxsz5	1486504829755850764	Bloque Esmeralda	cofre_doble	t	2026-04-04 22:38:57.776	2026-04-04 22:38:57.776	64
cmnkwzmyw0004wr7taqpxictf	1486504829755850764	Bloque Hierro	cofre_doble	t	2026-04-04 22:38:57.8	2026-04-04 22:38:57.8	64
cmnkwzmz70007wr7ti6vdnlja	1486504829755850764	Bloque Oro	cofre_doble	t	2026-04-04 22:38:57.811	2026-04-04 22:38:57.811	64
cmnkwzmzi000awr7tbyhhetv6	1486504829755850764	Lingote Netherite	cofre_doble	t	2026-04-04 22:38:57.822	2026-04-04 22:38:57.822	64
cmnkwzmzq000dwr7ttr61ntpw	1486504829755850764	Diamante	cofre_doble	t	2026-04-04 22:38:57.83	2026-04-04 22:38:57.83	64
cmnkwzmzz000gwr7txy9zm5ff	1486504829755850764	Bloque Diamante	cofre_doble	t	2026-04-04 22:38:57.839	2026-04-04 22:38:57.839	64
cmnkwzn0b000jwr7t29irbsx2	1486504829755850764	Bloque Amatista	cofre_doble	t	2026-04-04 22:38:57.851	2026-04-04 22:38:57.851	64
cmnkwzn0r000mwr7t0mr2pjg7	1486504829755850764	Ladrillo Resina	cofre_doble	t	2026-04-04 22:38:57.867	2026-04-04 22:38:57.867	64
cmnkwzn14000pwr7tp5afq5hl	1486504829755850764	Bloque Grumo Resina	cofre_doble	t	2026-04-04 22:38:57.88	2026-04-04 22:38:57.88	64
cmnkwzn1k000swr7tpean9nu4	1486504829755850764	Tolva	stack	t	2026-04-04 22:38:57.896	2026-04-04 22:38:57.896	64
cmnkwzn1x000vwr7tijf4f1n3	1486504829755850764	Repetidor De Redstone	stack	t	2026-04-04 22:38:57.909	2026-04-04 22:38:57.909	64
cmnkwzn27000ywr7tke7au9sw	1486504829755850764	Comparador De Redstone	stack	t	2026-04-04 22:38:57.919	2026-04-04 22:38:57.919	64
cmnkwzn2m0011wr7t61sety6x	1486504829755850764	Crafter	stack	t	2026-04-04 22:38:57.934	2026-04-04 22:38:57.934	64
cmnkwzn310014wr7t9j6x5axs	1486504829755850764	Observador	stack	t	2026-04-04 22:38:57.949	2026-04-04 22:38:57.949	64
cmnkwzn3f0017wr7t83n9rkhn	1486504829755850764	Cofre	stack	t	2026-04-04 22:38:57.963	2026-04-04 22:38:57.963	64
cmnkwzn3q001awr7trei3rz7f	1486504829755850764	Ranaluz Ocre	stack	t	2026-04-04 22:38:57.974	2026-04-04 22:38:57.974	64
cmnkwzn44001dwr7t87r6yjrh	1486504829755850764	Libro Reparacion	unidad	t	2026-04-04 22:38:57.988	2026-04-04 22:38:57.988	64
cmnkwzn4i001gwr7t1zn4lp1n	1486504829755850764	Libro Proteccion Iv	unidad	t	2026-04-04 22:38:58.002	2026-04-04 22:38:58.002	64
cmnkwzn4t001jwr7tlij5tqra	1486504829755850764	Libro Filo V	unidad	t	2026-04-04 22:38:58.013	2026-04-04 22:38:58.013	64
cmnkwzn57001mwr7tl85gg8hh	1486504829755850764	Pocion Fuerza Ii Arrojadiza	unidad	t	2026-04-04 22:38:58.027	2026-04-04 22:38:58.027	64
cmnkwzn5k001pwr7tw8rriotj	1486504829755850764	Pocion Velocidad	unidad	t	2026-04-04 22:38:58.04	2026-04-04 22:38:58.04	64
cmnkwzn60001swr7tzxoi8wbk	1486504829755850764	Librerias	cofre_doble	t	2026-04-04 22:38:58.056	2026-04-04 22:38:58.056	64
cmnkwzn6f001vwr7tdybbjt89	1486504829755850764	Verruga Del Nether	cofre_doble	t	2026-04-04 22:38:58.071	2026-04-04 22:38:58.071	64
cmnkwzn6t001ywr7ty010m3v3	1486504829755850764	Varas Blaze	cofre_doble	t	2026-04-04 22:38:58.085	2026-04-04 22:38:58.085	64
cmnkwzn770021wr7tgxad7xr1	1486504829755850764	Tronco Roble	cofre_doble	t	2026-04-04 22:38:58.099	2026-04-04 22:38:58.099	64
cmnkwzn7o0024wr7tg005jqw9	1486504829755850764	Tronco Abeto	cofre_doble	t	2026-04-04 22:38:58.116	2026-04-04 22:38:58.116	64
cmnkwzn880027wr7thj47iznv	1486504829755850764	Lana Blanca	cofre_doble	t	2026-04-04 22:38:58.136	2026-04-04 22:38:58.136	64
cmnkwzn8p002awr7tjpigrqfs	1486504829755850764	Hormigon Negro	cofre_doble	t	2026-04-04 22:38:58.153	2026-04-04 22:38:58.153	64
cmnkwzn93002dwr7tpcrowelq	1486504829755850764	Zanahorias Doradas	cofre_doble	t	2026-04-04 22:38:58.167	2026-04-04 22:38:58.167	64
cmnkwzn9k002gwr7txev989bv	1486504829755850764	Cuero	cofre_doble	t	2026-04-04 22:38:58.184	2026-04-04 22:38:58.184	64
cmnkwzna1002jwr7tq55t9e3d	1486504829755850764	Huesos	cofre_doble	t	2026-04-04 22:38:58.201	2026-04-04 22:38:58.201	64
cmnkwznai002mwr7tsizge2xk	1486504829755850764	Andesita	cofre_doble	t	2026-04-04 22:38:58.218	2026-04-04 22:38:58.218	64
cmnkwznax002pwr7tk2rc2ot0	1486504829755850764	Piedra	cofre_doble	t	2026-04-04 22:38:58.233	2026-04-04 22:38:58.233	64
cmnkwznbb002swr7t07mcc65r	1486504829755850764	Diorita	cofre_doble	t	2026-04-04 22:38:58.247	2026-04-04 22:38:58.247	64
cmnkwznbq002vwr7tzw1hblqo	1486504829755850764	Roca	cofre_doble	t	2026-04-04 22:38:58.262	2026-04-04 22:38:58.262	64
cmnkwznc7002ywr7t5tqh0p6k	1486504829755850764	Grava	cofre_doble	t	2026-04-04 22:38:58.279	2026-04-04 22:38:58.279	64
cmnkwzncp0031wr7tek1ooeh1	1486504829755850764	Arena	cofre_doble	t	2026-04-04 22:38:58.297	2026-04-04 22:38:58.297	64
cmnkwznd50034wr7ts8wy03sj	1486504829755850764	Tierra	cofre_doble	t	2026-04-04 22:38:58.313	2026-04-04 22:38:58.313	64
cmnkwzndh0037wr7t4mdcvwrn	1486504829755850764	Kit Navideño	unidad	t	2026-04-04 22:38:58.325	2026-04-04 22:38:58.325	64
cmnkwzndt003awr7t9dv01lcs	1486504829755850764	Kit Minero	unidad	t	2026-04-04 22:38:58.337	2026-04-04 22:38:58.337	64
cmnkwzne7003dwr7trdprtx03	1486504829755850764	Kit Constructor	unidad	t	2026-04-04 22:38:58.351	2026-04-04 22:38:58.351	64
cmnkwznej003gwr7tqa2bv7kj	1486504829755850764	Kit Supremo	unidad	t	2026-04-04 22:38:58.363	2026-04-04 22:38:58.363	64
cmnkwznez003jwr7t4a9dsenl	1486504829755850764	Kit Cupido	unidad	t	2026-04-04 22:38:58.379	2026-04-04 22:38:58.379	64
cmnkwznff003mwr7t3a28qpba	1486504829755850764	Spawner Creeper	unidad	t	2026-04-04 22:38:58.395	2026-04-04 22:38:58.395	64
cmnkwznfw003pwr7tonw4j8b6	1486504829755850764	Spawner Blaze	unidad	t	2026-04-04 22:38:58.412	2026-04-04 22:38:58.412	64
cmnkwzngd003swr7tklljhygo	1486504829755850764	Spawner Vaca	unidad	t	2026-04-04 22:38:58.429	2026-04-04 22:38:58.429	64
\.


--
-- Data for Name: ShopOrder; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopOrder" (id, "guildId", "orderCode", "customerUserId", status, "ticketChannelId", "staffChannelId", "acceptedByUserId", "rejectedByUserId", "closedByUserId", "rejectionReason", "cancelReason", "subtotalAmount", "totalAmount", "createdAt", "acceptedAt", "rejectedAt", "closedAt", "cancelledAt", "totalDiscountAmount") FROM stdin;
cmnky6ira0001f07t3ce8o3a2	1486504829755850764	AQ-D3PZ98	cmnkmtl2x0000977tcj227xbb	rejected	\N	1490073584864071932	\N	cmnkmtl2x0000977tcj227xbb	\N	a	\N	20000.000000000000000000000000000000	20000.000000000000000000000000000000	2026-04-04 23:12:18.55	\N	2026-04-05 20:16:39.07	\N	\N	0.000000000000000000000000000000
cmnm74jc4000cxu7t3eioahht	1486504829755850764	AQ-UJIVQW	cmnkznutr0000297tdc6yr3xf	cancelled	1490443547512537100	1490073584864071932	cmnkznutr0000297tdc6yr3xf	\N	\N	\N	por puto	20000.000000000000000000000000000000	19000.000000000000000000000000000000	2026-04-05 20:10:28.708	2026-04-05 20:10:33.486	\N	\N	2026-04-05 20:16:57.384	1000.000000000000000000000000000000
cmnkszw3z002pwk7tr5gump8o	1486504829755850764	AQ-4QZ8ZI	cmnkmtl2x0000977tcj227xbb	completed	1490090438755876964	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	cmnkmtl2x0000977tcj227xbb	\N	\N	31000.000000000000000000000000000000	31000.000000000000000000000000000000	2026-04-04 20:47:11.183	2026-04-04 20:47:25.68	\N	2026-04-04 20:48:24.996	\N	0.000000000000000000000000000000
cmnkympnj0001sa7tb6tureph	1486504829755850764	AQ-H4MEV1	cmnkmtl2x0000977tcj227xbb	completed	1490133182488772799	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	cmnkmtl2x0000977tcj227xbb	\N	\N	200000.000000000000000000000000000000	200000.000000000000000000000000000000	2026-04-04 23:24:53.983	2026-04-04 23:37:17.244	\N	2026-04-04 23:38:36.451	\N	0.000000000000000000000000000000
cmnl8377a0003687t62kj62m9	1486504829755850764	AQ-05JSKQ	cmnkmtl2x0000977tcj227xbb	cancelled	1490196723975323788	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	\N	\N	ok	100000.000000000000000000000000000000	100000.000000000000000000000000000000	2026-04-05 03:49:39.766	2026-04-05 03:49:46.06	\N	\N	2026-04-05 03:50:38.287	0.000000000000000000000000000000
cmnkznuus0001297t1z6ccb2y	1486504829755850764	AQ-QXWRD1	cmnkznutr0000297tdc6yr3xf	cancelled	1490137479830044702	1490073584864071932	cmnkznutr0000297tdc6yr3xf	\N	\N	\N	gAy	20000.000000000000000000000000000000	20000.000000000000000000000000000000	2026-04-04 23:53:46.996	2026-04-04 23:54:21.082	\N	\N	2026-04-05 03:52:25.917	0.000000000000000000000000000000
cmnl8mxoj00026y7toge9oo41	1486504829755850764	AQ-HI80YV	cmnkmtl2x0000977tcj227xbb	completed	1490200594835832912	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	cmnkmtl2x0000977tcj227xbb	\N	\N	100000.000000000000000000000000000000	95000.000000000000000000000000000000	2026-04-05 04:05:00.547	2026-04-05 04:05:09.23	\N	2026-04-05 04:11:07.83	\N	5000.000000000000000000000000000000
cmnl985750001vg7ti0v9m2qv	1486504829755850764	AQ-T6JZDX	cmnkmtl2x0000977tcj227xbb	cancelled	1490204822006403084	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	\N	\N	ok	70000.000000000000000000000000000000	67500.000000000000000000000000000000	2026-04-05 04:21:30.065	2026-04-05 04:21:57.199	\N	\N	2026-04-05 04:24:06.601	2500.000000000000000000000000000000
cmnlbx77v0001h47tuki2zdfs	1486504829755850764	AQ-VXXFNJ	cmnkmtl2x0000977tcj227xbb	cancelled	1490223742134259874	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	\N	\N	d	3000.000000000000000000000000000000	3000.000000000000000000000000000000	2026-04-05 05:36:58.315	2026-04-05 05:37:07.636	\N	\N	2026-04-05 05:38:02.391	0.000000000000000000000000000000
cmnlc2u0v000bh47tvgga3x1i	1486504829755850764	AQ-ORHOI9	cmnlc2u0f000ah47ty8z27ekq	completed	1490224864823476284	1490073584864071932	cmnkmtl2x0000977tcj227xbb	\N	cmnkmtl2x0000977tcj227xbb	\N	\N	5000.000000000000000000000000000000	5000.000000000000000000000000000000	2026-04-05 05:41:21.151	2026-04-05 05:41:35.236	\N	2026-04-05 05:45:42.451	\N	0.000000000000000000000000000000
cmnm71dpw0001xu7tba8fyzuh	1486504829755850764	AQ-2K8IJB	cmnkznutr0000297tdc6yr3xf	cancelled	1490443229336834199	1490073584864071932	cmnkznutr0000297tdc6yr3xf	\N	\N	\N	por puto	370000.000000000000000000000000000000	370000.000000000000000000000000000000	2026-04-05 20:08:01.46	2026-04-05 20:09:17.596	\N	\N	2026-04-05 20:10:05.022	0.000000000000000000000000000000
\.


--
-- Data for Name: ShopOrderEvent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopOrderEvent" (id, "orderId", "eventType", "oldStatus", "newStatus", "performedById", notes, "createdAt") FROM stdin;
cmnkszw4d002swk7tic2liijk	cmnkszw3z002pwk7tr5gump8o	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 20:47:11.197
cmnkt07ax002uwk7tdxow0ebg	cmnkszw3z002pwk7tr5gump8o	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 20:47:25.689
cmnkt1h2h002xwk7tb9nb2ex8	cmnkszw3z002pwk7tr5gump8o	order_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 20:48:25.001
cmnky6irk0003f07timnx4y9g	cmnky6ira0001f07t3ce8o3a2	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:12:18.56
cmnkympnr0003sa7tle6mzt3l	cmnkympnj0001sa7tb6tureph	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:24:53.991
cmnkz2n5y0001hz7tqxs6zt0u	cmnkympnj0001sa7tb6tureph	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:37:17.254
cmnkz4c9q0008hz7tdnvcsqi6	cmnkympnj0001sa7tb6tureph	stock_reserved	accepted	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:38:36.446
cmnkz4ca0000ahz7tn49lvq9b	cmnkympnj0001sa7tb6tureph	delivery_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:38:36.456
cmnkz4ca1000bhz7teywh347y	cmnkympnj0001sa7tb6tureph	order_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-04 23:38:36.457
cmnkznuux0003297t64eosdr2	cmnkznuus0001297t1z6ccb2y	order_created	\N	pending	cmnkznutr0000297tdc6yr3xf	\N	2026-04-04 23:53:47.001
cmnkzol5w0005297tz8aikbut	cmnkznuus0001297t1z6ccb2y	order_accepted	pending	accepted	cmnkznutr0000297tdc6yr3xf	\N	2026-04-04 23:54:21.092
cmnl8377m0005687ttwtvfag2	cmnl8377a0003687t62kj62m9	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 03:49:39.778
cmnl83c2e0007687tinlzz7gc	cmnl8377a0003687t62kj62m9	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 03:49:46.07
cmnl84gcq0009687travecest	cmnl8377a0003687t62kj62m9	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	ok	2026-04-05 03:50:38.282
cmnl84gd1000a687tx62nn3r4	cmnl8377a0003687t62kj62m9	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	ok	2026-04-05 03:50:38.293
cmnl86reg000c687tvdfpxnli	cmnkznuus0001297t1z6ccb2y	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	gAy	2026-04-05 03:52:25.912
cmnl86reo000d687twhsghobi	cmnkznuus0001297t1z6ccb2y	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	gAy	2026-04-05 03:52:25.92
cmnl8mxor00046y7tejuiatlf	cmnl8mxoj00026y7toge9oo41	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:05:00.556
cmnl8n4dy00066y7tgdu5l77n	cmnl8mxoj00026y7toge9oo41	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:05:09.238
cmnl8nf4d00096y7tzowmvkdp	cmnl8mxoj00026y7toge9oo41	manual_discount_applied	accepted	accepted	cmnkmtl2x0000977tcj227xbb	Piedra: Cofre doble de piedra 20+	2026-04-05 04:05:23.149
cmnl8ut2k000i6y7tgsabbgo3	cmnl8mxoj00026y7toge9oo41	stock_reserved	accepted	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:11:07.82
cmnl8ut30000k6y7t7xbdajih	cmnl8mxoj00026y7toge9oo41	delivery_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:11:07.836
cmnl8ut33000l6y7teo5jj7zj	cmnl8mxoj00026y7toge9oo41	order_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:11:07.84
cmnl9857i0004vg7t69k9v9ld	cmnl985750001vg7ti0v9m2qv	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:21:30.078
cmnl98q520006vg7tesksfwyb	cmnl985750001vg7ti0v9m2qv	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 04:21:57.206
cmnl99g7m0009vg7trfs9cfeg	cmnl985750001vg7ti0v9m2qv	manual_discount_applied	accepted	accepted	cmnkmtl2x0000977tcj227xbb	Piedra: Cofre doble de piedra 20+	2026-04-05 04:22:30.995
cmnl9bhz8000cvg7tmvepvbw8	cmnl985750001vg7ti0v9m2qv	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	ok	2026-04-05 04:24:06.596
cmnl9bhzj000dvg7t2ezrrg76	cmnl985750001vg7ti0v9m2qv	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	ok	2026-04-05 04:24:06.607
cmnlbx7820003h47tl94nq67d	cmnlbx77v0001h47tuki2zdfs	order_created	\N	pending	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:36:58.322
cmnlbxef00005h47tpjsbufgi	cmnlbx77v0001h47tuki2zdfs	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:37:07.644
cmnlbyknn0008h47tatz1u6e8	cmnlbx77v0001h47tuki2zdfs	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	d	2026-04-05 05:38:02.387
cmnlbyknw0009h47tnsim0kh1	cmnlbx77v0001h47tuki2zdfs	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	d	2026-04-05 05:38:02.396
cmnlc2u10000dh47teuds03lv	cmnlc2u0v000bh47tvgga3x1i	order_created	\N	pending	cmnlc2u0f000ah47ty8z27ekq	\N	2026-04-05 05:41:21.156
cmnlc34wa000fh47t4dal22oc	cmnlc2u0v000bh47tvgga3x1i	order_accepted	pending	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:41:35.242
cmnlc8fn0000mh47tnfa7uq3k	cmnlc2u0v000bh47tvgga3x1i	stock_reserved	accepted	accepted	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:45:42.444
cmnlc8fnb000oh47tzyu2onvj	cmnlc2u0v000bh47tvgga3x1i	delivery_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:45:42.455
cmnlc8fnd000ph47tqp28y3ju	cmnlc2u0v000bh47tvgga3x1i	order_completed	accepted	completed	cmnkmtl2x0000977tcj227xbb	\N	2026-04-05 05:45:42.457
cmnm71dq40005xu7tfn4nw1ks	cmnm71dpw0001xu7tba8fyzuh	order_created	\N	pending	cmnkznutr0000297tdc6yr3xf	\N	2026-04-05 20:08:01.468
cmnm730h30007xu7tc8zgf32l	cmnm71dpw0001xu7tba8fyzuh	order_accepted	pending	accepted	cmnkznutr0000297tdc6yr3xf	\N	2026-04-05 20:09:17.607
cmnm741220009xu7tz0vel0vo	cmnm71dpw0001xu7tba8fyzuh	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	por puto	2026-04-05 20:10:05.018
cmnm7412b000axu7t9k2w88tl	cmnm71dpw0001xu7tba8fyzuh	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	por puto	2026-04-05 20:10:05.027
cmnm74jcc000exu7t86318uwj	cmnm74jc4000cxu7t3eioahht	order_created	\N	pending	cmnkznutr0000297tdc6yr3xf	\N	2026-04-05 20:10:28.716
cmnm74n0x000gxu7tq7mcyw64	cmnm74jc4000cxu7t3eioahht	order_accepted	pending	accepted	cmnkznutr0000297tdc6yr3xf	\N	2026-04-05 20:10:33.489
cmnm74upq000jxu7t95h1oifa	cmnm74jc4000cxu7t3eioahht	manual_discount_applied	accepted	accepted	cmnkznutr0000297tdc6yr3xf	Piedra: Cofre doble de piedra 20+	2026-04-05 20:10:43.454
cmnm7ch48000lxu7tf56epkrc	cmnky6ira0001f07t3ce8o3a2	order_rejected	pending	rejected	cmnkmtl2x0000977tcj227xbb	a	2026-04-05 20:16:39.08
cmnm7cv8k000nxu7t7m8l4yxs	cmnm74jc4000cxu7t3eioahht	stock_released	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	por puto	2026-04-05 20:16:57.38
cmnm7cv8r000oxu7tdq16kg3r	cmnm74jc4000cxu7t3eioahht	order_cancelled	accepted	cancelled	cmnkmtl2x0000977tcj227xbb	por puto	2026-04-05 20:16:57.387
\.


--
-- Data for Name: ShopOrderItem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopOrderItem" (id, "orderId", "productId", quantity, "unitPrice", "grossLineTotal", "reservedQuantity", "deliveredQuantity", notes, "netLineTotal") FROM stdin;
cmnkszw42002qwk7tznl77x5e	cmnkszw3z002pwk7tr5gump8o	cmnksxwa8001uwk7tynrcvw1z	10	1000.000000000000000000000000000000	10000.000000000000000000000000000000	0	10	\N	10000.000000000000000000000000000000
cmnkszw42002rwk7t5aeoyk8v	cmnkszw3z002pwk7tr5gump8o	cmnksxw3z000wwk7tbjpqav4p	21	1000.000000000000000000000000000000	21000.000000000000000000000000000000	0	21	\N	21000.000000000000000000000000000000
cmnky6irf0002f07t6asx35rl	cmnky6ira0001f07t3ce8o3a2	cmnksxwa8001uwk7tynrcvw1z	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	\N	20000.000000000000000000000000000000
cmnkympno0002sa7t7w5g3jjs	cmnkympnj0001sa7tb6tureph	cmnksxwa8001uwk7tynrcvw1z	200	1000.000000000000000000000000000000	200000.000000000000000000000000000000	0	200	\N	200000.000000000000000000000000000000
cmnkznuuv0002297twfziav1r	cmnkznuus0001297t1z6ccb2y	cmnksxwa8001uwk7tynrcvw1z	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	\N	20000.000000000000000000000000000000
cmnl8377h0004687t30nvxg22	cmnl8377a0003687t62kj62m9	cmnksxwal001wwk7t03vaya3f	100	1000.000000000000000000000000000000	100000.000000000000000000000000000000	0	0	\N	100000.000000000000000000000000000000
cmnl8mxon00036y7twgsr21ek	cmnl8mxoj00026y7toge9oo41	cmnksxwal001wwk7t03vaya3f	100	1000.000000000000000000000000000000	100000.000000000000000000000000000000	0	100	\N	95000.000000000000000000000000000000
cmnl9857b0002vg7tzej9r7fg	cmnl985750001vg7ti0v9m2qv	cmnksxwal001wwk7t03vaya3f	50	1000.000000000000000000000000000000	50000.000000000000000000000000000000	0	0	\N	47500.000000000000000000000000000000
cmnl9857f0003vg7txz8eb9zl	cmnl985750001vg7ti0v9m2qv	cmnksxwbl0022wk7trzhhv7ha	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	\N	20000.000000000000000000000000000000
cmnlbx77z0002h47tpq54ht0u	cmnlbx77v0001h47tuki2zdfs	cmnksxw1s000iwk7tj1f2d7b8	3	1000.000000000000000000000000000000	3000.000000000000000000000000000000	0	0	\N	3000.000000000000000000000000000000
cmnlc2u0y000ch47tc5kjyhw2	cmnlc2u0v000bh47tvgga3x1i	cmnksxw4e000ywk7tjy8514cf	5	1000.000000000000000000000000000000	5000.000000000000000000000000000000	0	5	\N	5000.000000000000000000000000000000
cmnm71dq00002xu7tnz40g344	cmnm71dpw0001xu7tba8fyzuh	cmnksxw5h0014wk7tg6dgbcka	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	No tardes	20000.000000000000000000000000000000
cmnm71dq20003xu7t1od5am30	cmnm71dpw0001xu7tba8fyzuh	cmnksxwaz001ywk7te5x5jwek	330	1000.000000000000000000000000000000	330000.000000000000000000000000000000	0	0	\N	330000.000000000000000000000000000000
cmnm71dq20004xu7tblo6i6fy	cmnm71dpw0001xu7tba8fyzuh	cmnksxwa8001uwk7tynrcvw1z	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	\N	20000.000000000000000000000000000000
cmnm74jc8000dxu7tsu14y4av	cmnm74jc4000cxu7t3eioahht	cmnksxwal001wwk7t03vaya3f	20	1000.000000000000000000000000000000	20000.000000000000000000000000000000	0	0	\N	19000.000000000000000000000000000000
\.


--
-- Data for Name: ShopProduct; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopProduct" (id, "guildId", name, "productType", category, subcategory, description, "isActive", "createdAt", "updatedAt", "baseMaterialId", "presentationLabel", "presentationQuantity", "presentationType") FROM stdin;
cmnkspray0001wk7tqtp4iab9	1486504829755850764	Piedra x1 cofre doble	bulk	bloques	overworld	Cofre doble de piedra lisa	t	2026-04-04 20:39:18.394	2026-04-04 20:39:18.394	\N	\N	1	custom
cmnksxvz50004wk7trkltp046	1486504829755850764	Bloque Esmeralda	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.697	2026-04-04 20:45:37.697	\N	\N	1	custom
cmnksxvzg0006wk7t6vsi800b	1486504829755850764	Bloque Hierro	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.708	2026-04-04 20:45:37.708	\N	\N	1	custom
cmnksxvzs0008wk7tas6211sx	1486504829755850764	Bloque Oro	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.72	2026-04-04 20:45:37.72	\N	\N	1	custom
cmnksxw06000awk7tlufgai8t	1486504829755850764	Lingote Netherite	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.734	2026-04-04 20:45:37.734	\N	\N	1	custom
cmnksxw0l000cwk7tcjtq05af	1486504829755850764	Diamante	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.749	2026-04-04 20:45:37.749	\N	\N	1	custom
cmnksxw10000ewk7txe8aryfc	1486504829755850764	Bloque Diamante	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.764	2026-04-04 20:45:37.764	\N	\N	1	custom
cmnksxw1e000gwk7t2nsd14pw	1486504829755850764	Bloque Amatista	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.778	2026-04-04 20:45:37.778	\N	\N	1	custom
cmnksxw1s000iwk7tj1f2d7b8	1486504829755850764	Ladrillo Resina	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.792	2026-04-04 20:45:37.792	\N	\N	1	custom
cmnksxw24000kwk7tffjsz1bo	1486504829755850764	Bloque Grumo Resina	bulk	minerales	minerales	\N	t	2026-04-04 20:45:37.804	2026-04-04 20:45:37.804	\N	\N	1	custom
cmnksxw2k000mwk7th4r3s3vg	1486504829755850764	Tolva	single	redstone	otros	\N	t	2026-04-04 20:45:37.82	2026-04-04 20:45:37.82	\N	\N	1	custom
cmnksxw2v000owk7tq3sb5mml	1486504829755850764	Repetidor De Redstone	single	redstone	otros	\N	t	2026-04-04 20:45:37.831	2026-04-04 20:45:37.831	\N	\N	1	custom
cmnksxw32000qwk7tyxbc9gr1	1486504829755850764	Comparador De Redstone	single	redstone	otros	\N	t	2026-04-04 20:45:37.839	2026-04-04 20:45:37.839	\N	\N	1	custom
cmnksxw3d000swk7tlkiqthv9	1486504829755850764	Crafter	single	redstone	otros	\N	t	2026-04-04 20:45:37.849	2026-04-04 20:45:37.849	\N	\N	1	custom
cmnksxw3o000uwk7t4kh634cf	1486504829755850764	Observador	single	redstone	otros	\N	t	2026-04-04 20:45:37.86	2026-04-04 20:45:37.86	\N	\N	1	custom
cmnksxw3z000wwk7tbjpqav4p	1486504829755850764	Cofre	single	bloques	utiles	\N	t	2026-04-04 20:45:37.871	2026-04-04 20:45:37.871	\N	\N	1	custom
cmnksxw4e000ywk7tjy8514cf	1486504829755850764	Ranaluz Ocre	single	bloques	utiles	\N	t	2026-04-04 20:45:37.886	2026-04-04 20:45:37.886	\N	\N	1	custom
cmnksxw4q0010wk7t8uqa88cy	1486504829755850764	Libro Reparacion	single	encantamientos	libros_encantados	\N	t	2026-04-04 20:45:37.898	2026-04-04 20:45:37.898	\N	\N	1	custom
cmnksxw530012wk7t61jq2tgh	1486504829755850764	Libro Proteccion Iv	single	encantamientos	libros_encantados	\N	t	2026-04-04 20:45:37.911	2026-04-04 20:45:37.911	\N	\N	1	custom
cmnksxw5h0014wk7tg6dgbcka	1486504829755850764	Libro Filo V	single	encantamientos	libros_encantados	\N	t	2026-04-04 20:45:37.925	2026-04-04 20:45:37.925	\N	\N	1	custom
cmnksxw5u0016wk7tfzn53mbd	1486504829755850764	Pocion Fuerza Ii Arrojadiza	single	pociones	pociones	\N	t	2026-04-04 20:45:37.938	2026-04-04 20:45:37.938	\N	\N	1	custom
cmnksxw670018wk7t9f2hqu1v	1486504829755850764	Pocion Velocidad	single	pociones	pociones	\N	t	2026-04-04 20:45:37.952	2026-04-04 20:45:37.952	\N	\N	1	custom
cmnksxw6m001awk7tspm0gg7d	1486504829755850764	Librerias	bulk	encantamientos	libros_encantados	\N	t	2026-04-04 20:45:37.966	2026-04-04 20:45:37.966	\N	\N	1	custom
cmnksxw6x001cwk7tby8u1fqm	1486504829755850764	Verruga Del Nether	bulk	pociones	ingredientes_de_pociones	\N	t	2026-04-04 20:45:37.978	2026-04-04 20:45:37.978	\N	\N	1	custom
cmnksxw7a001ewk7t4oa5rx7m	1486504829755850764	Varas Blaze	bulk	pociones	ingredientes_de_pociones	\N	t	2026-04-04 20:45:37.99	2026-04-04 20:45:37.99	\N	\N	1	custom
cmnksxw7l001gwk7tbzhx48k2	1486504829755850764	Tronco Roble	bulk	bloques	madera	\N	t	2026-04-04 20:45:38.001	2026-04-04 20:45:38.001	\N	\N	1	custom
cmnksxw80001iwk7tyhkx3lkm	1486504829755850764	Tronco Abeto	bulk	bloques	madera	\N	t	2026-04-04 20:45:38.016	2026-04-04 20:45:38.016	\N	\N	1	custom
cmnksxw8d001kwk7tam6dgvek	1486504829755850764	Lana Blanca	bulk	bloques	bloques_decorativos	\N	t	2026-04-04 20:45:38.029	2026-04-04 20:45:38.029	\N	\N	1	custom
cmnksxw8r001mwk7tu5oyljic	1486504829755850764	Hormigon Negro	bulk	bloques	bloques_decorativos	\N	t	2026-04-04 20:45:38.043	2026-04-04 20:45:38.043	\N	\N	1	custom
cmnksxw95001owk7tkcjd12mb	1486504829755850764	Zanahorias Doradas	bulk	semillas_y_comida	otros	\N	t	2026-04-04 20:45:38.057	2026-04-04 20:45:38.057	\N	\N	1	custom
cmnksxw9h001qwk7tezbi60wz	1486504829755850764	Cuero	bulk	drop_de_mobs	otros	\N	t	2026-04-04 20:45:38.069	2026-04-04 20:45:38.069	\N	\N	1	custom
cmnksxw9u001swk7tjl0l3nk7	1486504829755850764	Huesos	bulk	drop_de_mobs	otros	\N	t	2026-04-04 20:45:38.082	2026-04-04 20:45:38.082	\N	\N	1	custom
cmnksxwa8001uwk7tynrcvw1z	1486504829755850764	Andesita	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.096	2026-04-04 20:45:38.096	\N	\N	1	custom
cmnksxwal001wwk7t03vaya3f	1486504829755850764	Piedra	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.11	2026-04-04 20:45:38.11	\N	\N	1	custom
cmnksxwaz001ywk7te5x5jwek	1486504829755850764	Diorita	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.123	2026-04-04 20:45:38.123	\N	\N	1	custom
cmnksxwbb0020wk7tl6fa2tt6	1486504829755850764	Roca	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.135	2026-04-04 20:45:38.135	\N	\N	1	custom
cmnksxwbl0022wk7trzhhv7ha	1486504829755850764	Grava	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.146	2026-04-04 20:45:38.146	\N	\N	1	custom
cmnksxwbx0024wk7tput6iz0p	1486504829755850764	Arena	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.157	2026-04-04 20:45:38.157	\N	\N	1	custom
cmnksxwc90026wk7ts16s7zty	1486504829755850764	Tierra	bulk	bloques	overworld	\N	t	2026-04-04 20:45:38.169	2026-04-04 20:45:38.169	\N	\N	1	custom
cmnksxwcl0028wk7tpaot984x	1486504829755850764	Kit Navideño	kit	kits	otros	\N	t	2026-04-04 20:45:38.181	2026-04-04 20:45:38.181	\N	\N	1	custom
cmnksxwcv002awk7tgn7jwww1	1486504829755850764	Kit Minero	kit	kits	otros	\N	t	2026-04-04 20:45:38.191	2026-04-04 20:45:38.191	\N	\N	1	custom
cmnksxwd6002cwk7tto3smgg2	1486504829755850764	Kit Constructor	kit	kits	otros	\N	t	2026-04-04 20:45:38.202	2026-04-04 20:45:38.202	\N	\N	1	custom
cmnksxwde002ewk7tvoiqp6pm	1486504829755850764	Kit Supremo	kit	kits	otros	\N	t	2026-04-04 20:45:38.21	2026-04-04 20:45:38.21	\N	\N	1	custom
cmnksxwdo002gwk7tnjszwjtg	1486504829755850764	Kit Cupido	kit	kits	otros	\N	t	2026-04-04 20:45:38.22	2026-04-04 20:45:38.22	\N	\N	1	custom
cmnksxwe0002iwk7te2ovid7o	1486504829755850764	Spawner Creeper	single	spawners	otros	\N	t	2026-04-04 20:45:38.232	2026-04-04 20:45:38.232	\N	\N	1	custom
cmnksxwe8002kwk7t5qmliajx	1486504829755850764	Spawner Blaze	single	spawners	otros	\N	t	2026-04-04 20:45:38.24	2026-04-04 20:45:38.24	\N	\N	1	custom
cmnksxweh002mwk7tuj3pchrz	1486504829755850764	Spawner Vaca	single	spawners	otros	\N	t	2026-04-04 20:45:38.25	2026-04-04 20:45:38.25	\N	\N	1	custom
cmnmbekyd00010g7tkeqbocs3	1486504829755850764	Pizarra Profunda Rocosa	bulk	bloques	overworld	\N	f	2026-04-05 22:10:15.829	2026-04-05 22:10:15.829	\N	\N	1	custom
\.


--
-- Data for Name: ShopProductComponent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopProductComponent" (id, "productId", "materialId", "quantityRequired") FROM stdin;
cmnl67umq000h297t4hjmnlou	cmnksxw3d000swk7tlkiqthv9	cmnkwzn2m0011wr7t61sety6x	5
cmnl67uni000m297tvs428vzi	cmnksxw8r001mwk7tu5oyljic	cmnkwzn8p002awr7tjpigrqfs	2
cmnl67uow001d297tlkwo8y07	cmnksxw7l001gwk7tbzhx48k2	cmnkwzn770021wr7tgxad7xr1	3
cmnl67ukr0008297tch3cxnfv	cmnksxwbx0024wk7tput6iz0p	cmnkwzncp0031wr7tek1ooeh1	2
cmnl67ul00009297t80wylvmi	cmnksxw1e000gwk7t2nsd14pw	cmnkwzn0b000jwr7t29irbsx2	2
cmnl67ul4000a297thbev7k5x	cmnksxw10000ewk7txe8aryfc	cmnkwzmzz000gwr7txy9zm5ff	2
cmnl67ulc000b297tbrh3t7a3	cmnksxvz50004wk7trkltp046	cmnkwzmy80001wr7turbyxsz5	3
cmnl67ulj000c297tbjrt6oho	cmnksxw24000kwk7tffjsz1bo	cmnkwzn14000pwr7tp5afq5hl	1
cmnl67uls000d297twqi75luy	cmnksxvzg0006wk7t6vsi800b	cmnkwzmyw0004wr7taqpxictf	2
cmnl67uly000e297t3yfdp9mt	cmnksxvzs0008wk7tas6211sx	cmnkwzmz70007wr7ti6vdnlja	2
cmnl67um5000f297tynbim63p	cmnksxw3z000wwk7tbjpqav4p	cmnkwzn3f0017wr7t83n9rkhn	12
cmnl67umb000g297t6augyh2l	cmnksxw32000qwk7tyxbc9gr1	cmnkwzn27000ywr7tke7au9sw	6
cmnl67umz000i297t44vbaw5l	cmnksxw9h001qwk7tezbi60wz	cmnkwzn9k002gwr7txev989bv	1
cmnl67un5000j297tv7renbkl	cmnksxw0l000cwk7tcjtq05af	cmnkwzmzq000dwr7ttr61ntpw	2
cmnl67un8000k297tj6zydcun	cmnksxwaz001ywk7te5x5jwek	cmnkwznbb002swr7t07mcc65r	2
cmnl67unc000l297t57mof82i	cmnksxwbl0022wk7trzhhv7ha	cmnkwznc7002ywr7t5tqh0p6k	2
cmnl67unl000n297tcys3c0l5	cmnksxw9u001swk7tjl0l3nk7	cmnkwzna1002jwr7tq55t9e3d	1
cmnl67uno000o297tyyztbq0e	cmnksxwd6002cwk7tto3smgg2	cmnkwzne7003dwr7trdprtx03	10
cmnl67unr000p297t25hbt3lr	cmnksxwdo002gwk7tnjszwjtg	cmnkwznez003jwr7t4a9dsenl	8
cmnl67unt000q297tglyn16ke	cmnksxwcv002awk7tgn7jwww1	cmnkwzndt003awr7t9dv01lcs	10
cmnl67unv000r297tkgdaq3yz	cmnksxwcl0028wk7tpaot984x	cmnkwzndh0037wr7t4mdcvwrn	10
cmnl67uny000s297tou51yv9d	cmnksxwde002ewk7tvoiqp6pm	cmnkwznej003gwr7tqa2bv7kj	8
cmnl67uo0000t297thx16epu1	cmnksxw1s000iwk7tj1f2d7b8	cmnkwzn0r000mwr7t0mr2pjg7	1
cmnl67uo2000u297twhgc5xkr	cmnksxw8d001kwk7tam6dgvek	cmnkwzn880027wr7thj47iznv	2
cmnl67uo4000v297thlqjgrge	cmnksxw6m001awk7tspm0gg7d	cmnkwzn60001swr7tzxoi8wbk	1
cmnl67uo6000w297t25pmc3mc	cmnksxw5h0014wk7tg6dgbcka	cmnkwzn4t001jwr7tlij5tqra	35
cmnl67uo8000x297txvtvczft	cmnksxw530012wk7t61jq2tgh	cmnkwzn4i001gwr7t1zn4lp1n	40
cmnl67uoa000y297thse15mia	cmnksxw4q0010wk7t8uqa88cy	cmnkwzn44001dwr7t87r6yjrh	40
cmnl67uob000z297tus2p9laq	cmnksxw06000awk7tlufgai8t	cmnkwzmzi000awr7tbyhhetv6	1
cmnl67uod0010297tcr4oo3t1	cmnksxw3o000uwk7t4kh634cf	cmnkwzn310014wr7t9j6x5axs	8
cmnl67uoh0012297tt2q0ahdl	cmnksxw5u0016wk7tfzn53mbd	cmnkwzn57001mwr7tl85gg8hh	30
cmnl67uoi0013297ttdr81eki	cmnksxw670018wk7t9f2hqu1v	cmnkwzn5k001pwr7tw8rriotj	6
cmnl67uok0014297tght7sylg	cmnksxw4e000ywk7tjy8514cf	cmnkwzn3q001awr7trei3rz7f	8
cmnl67uol0015297ts8s2cni7	cmnksxw2v000owk7tq3sb5mml	cmnkwzn1x000vwr7tijf4f1n3	2
cmnl67uon0016297t4f9qbna5	cmnksxwbb0020wk7tl6fa2tt6	cmnkwznbq002vwr7tzw1hblqo	5
cmnl67uoo0017297thdo5xwis	cmnksxwe8002kwk7t5qmliajx	cmnkwznfw003pwr7tonw4j8b6	6
cmnl67uop0018297t4zu9c30l	cmnksxwe0002iwk7te2ovid7o	cmnkwznff003mwr7t3a28qpba	6
cmnl67uor0019297t3ogwu01e	cmnksxweh002mwk7tuj3pchrz	cmnkwzngd003swr7tklljhygo	3
cmnl67uot001a297tz161w7y1	cmnksxwc90026wk7ts16s7zty	cmnkwznd50034wr7ts8wy03sj	10
cmnl67uou001b297tndp4fl27	cmnksxw2k000mwk7th4r3s3vg	cmnkwzn1k000swr7tpean9nu4	2
cmnl67uov001c297t4o9rjguj	cmnksxw80001iwk7tyhkx3lkm	cmnkwzn7o0024wr7tg005jqw9	3
cmnl67uox001e297t4g6gpxs6	cmnksxw7a001ewk7t4oa5rx7m	cmnkwzn6t001ywr7ty010m3v3	1
cmnl67uoz001f297trb4faqr5	cmnksxw6x001cwk7tby8u1fqm	cmnkwzn6f001vwr7tdybbjt89	1
cmnl67up0001g297tj4d5cv49	cmnksxw95001owk7tkcjd12mb	cmnkwzn93002dwr7tpcrowelq	1
cmnkxir3b0001f77t093vlv9h	cmnksxwa8001uwk7tynrcvw1z	cmnkwznai002mwr7tsizge2xk	64
cmnl67uof0011297troshvj5d	cmnksxwal001wwk7t03vaya3f	cmnkwznax002pwr7tk2rc2ot0	64
\.


--
-- Data for Name: ShopProductPrice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopProductPrice" (id, "productId", price, currency, "validFrom", "validTo", "changedByUserId") FROM stdin;
cmnksprb00002wk7t5yjzimd8	cmnkspray0001wk7tqtp4iab9	1000.000000000000000000000000000000	$	2026-04-04 20:39:18.394	\N	cmnkmtl2x0000977tcj227xbb
cmnksxvz70005wk7tnjiu9hrk	cmnksxvz50004wk7trkltp046	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.697	\N	cmnkmtl2x0000977tcj227xbb
cmnksxvzi0007wk7t2pstwovo	cmnksxvzg0006wk7t6vsi800b	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.708	\N	cmnkmtl2x0000977tcj227xbb
cmnksxvzu0009wk7t6088i3d7	cmnksxvzs0008wk7tas6211sx	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.72	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw09000bwk7t0c5t8bs5	cmnksxw06000awk7tlufgai8t	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.734	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw0n000dwk7ta7pnk3ps	cmnksxw0l000cwk7tcjtq05af	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.749	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw11000fwk7tk0rw3c6w	cmnksxw10000ewk7txe8aryfc	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.764	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw1g000hwk7tuep1bshm	cmnksxw1e000gwk7t2nsd14pw	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.778	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw1u000jwk7t11tc2lnb	cmnksxw1s000iwk7tj1f2d7b8	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.792	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw27000lwk7te4602r6j	cmnksxw24000kwk7tffjsz1bo	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.804	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw2m000nwk7t4oxx3zlr	cmnksxw2k000mwk7th4r3s3vg	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.82	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw2w000pwk7thtgvv9ej	cmnksxw2v000owk7tq3sb5mml	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.831	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw34000rwk7tqxa2883h	cmnksxw32000qwk7tyxbc9gr1	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.839	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw3e000twk7tgdyfza45	cmnksxw3d000swk7tlkiqthv9	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.849	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw3p000vwk7t6u61dspk	cmnksxw3o000uwk7t4kh634cf	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.86	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw41000xwk7tw7160r27	cmnksxw3z000wwk7tbjpqav4p	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.871	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw4g000zwk7tyt0l1pbv	cmnksxw4e000ywk7tjy8514cf	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.886	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw4s0011wk7tl2lhhwfz	cmnksxw4q0010wk7t8uqa88cy	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.898	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw550013wk7teucv4ckb	cmnksxw530012wk7t61jq2tgh	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.911	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw5k0015wk7tmoqyyhdi	cmnksxw5h0014wk7tg6dgbcka	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.925	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw5w0017wk7taqo6iimv	cmnksxw5u0016wk7tfzn53mbd	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.938	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw690019wk7tgrco16rx	cmnksxw670018wk7t9f2hqu1v	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.952	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw6o001bwk7t77j5a1z7	cmnksxw6m001awk7tspm0gg7d	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.966	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw70001dwk7t1gv58e81	cmnksxw6x001cwk7tby8u1fqm	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.978	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw7c001fwk7tm0s7lpra	cmnksxw7a001ewk7t4oa5rx7m	1000.000000000000000000000000000000	$	2026-04-04 20:45:37.99	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw7n001hwk7twnbi2eaz	cmnksxw7l001gwk7tbzhx48k2	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.001	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw82001jwk7twtn0u0ih	cmnksxw80001iwk7tyhkx3lkm	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.016	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw8f001lwk7t3jhrk1e0	cmnksxw8d001kwk7tam6dgvek	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.029	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw8t001nwk7t6dvg5gz8	cmnksxw8r001mwk7tu5oyljic	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.043	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw97001pwk7tgnshxo98	cmnksxw95001owk7tkcjd12mb	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.057	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw9j001rwk7t2lhrcagu	cmnksxw9h001qwk7tezbi60wz	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.069	\N	cmnkmtl2x0000977tcj227xbb
cmnksxw9w001twk7tcrnqk2ue	cmnksxw9u001swk7tjl0l3nk7	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.082	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwab001vwk7to09ed67n	cmnksxwa8001uwk7tynrcvw1z	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.096	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwan001xwk7t4liygr01	cmnksxwal001wwk7t03vaya3f	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.11	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwb1001zwk7twwo4cvto	cmnksxwaz001ywk7te5x5jwek	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.123	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwbc0021wk7tn29ts0k7	cmnksxwbb0020wk7tl6fa2tt6	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.135	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwbn0023wk7t6zfv4q9y	cmnksxwbl0022wk7trzhhv7ha	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.146	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwbz0025wk7tyr9vzit8	cmnksxwbx0024wk7tput6iz0p	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.157	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwca0027wk7t1y089lg0	cmnksxwc90026wk7ts16s7zty	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.169	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwcn0029wk7td2p1o4h4	cmnksxwcl0028wk7tpaot984x	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.181	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwcx002bwk7thn5esq6l	cmnksxwcv002awk7tgn7jwww1	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.191	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwd7002dwk7tlo8hu5io	cmnksxwd6002cwk7tto3smgg2	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.202	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwdg002fwk7tr8oqcbbl	cmnksxwde002ewk7tvoiqp6pm	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.21	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwdq002hwk7tzbqglpb6	cmnksxwdo002gwk7tnjszwjtg	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.22	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwe2002jwk7t1uhklghk	cmnksxwe0002iwk7te2ovid7o	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.232	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwea002lwk7tcftmgu97	cmnksxwe8002kwk7t5qmliajx	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.24	\N	cmnkmtl2x0000977tcj227xbb
cmnksxwej002nwk7t35al6w3y	cmnksxweh002mwk7tuj3pchrz	1000.000000000000000000000000000000	$	2026-04-04 20:45:38.25	\N	cmnkmtl2x0000977tcj227xbb
cmnmbekyf00020g7tgi1pg4lp	cmnmbekyd00010g7tkeqbocs3	1000.000000000000000000000000000000	$	2026-04-05 22:10:15.829	\N	cmnkmtl2x0000977tcj227xbb
\.


--
-- Data for Name: ShopSale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopSale" (id, "guildId", "orderId", "buyerUserId", "registeredById", "totalAmount", "soldAt") FROM stdin;
cmnkt1h27002wwk7ti9rluq97	1486504829755850764	cmnkszw3z002pwk7tr5gump8o	cmnkmtl2x0000977tcj227xbb	cmnkmtl2x0000977tcj227xbb	31000.000000000000000000000000000000	2026-04-04 20:48:24.991
cmnkz4c9t0009hz7tx2pbfbet	1486504829755850764	cmnkympnj0001sa7tb6tureph	cmnkmtl2x0000977tcj227xbb	cmnkmtl2x0000977tcj227xbb	200000.000000000000000000000000000000	2026-04-04 23:38:36.449
cmnl8ut2q000j6y7trjsgm9b4	1486504829755850764	cmnl8mxoj00026y7toge9oo41	cmnkmtl2x0000977tcj227xbb	cmnkmtl2x0000977tcj227xbb	95000.000000000000000000000000000000	2026-04-05 04:11:07.826
cmnlc8fn4000nh47ti8y85eby	1486504829755850764	cmnlc2u0v000bh47tvgga3x1i	cmnlc2u0f000ah47ty8z27ekq	cmnkmtl2x0000977tcj227xbb	5000.000000000000000000000000000000	2026-04-05 05:45:42.448
\.


--
-- Data for Name: ShopUser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopUser" (id, "guildId", "discordUserId", username, "displayName", "createdAt", "updatedAt", "isStaff") FROM stdin;
cmnkznutr0000297tdc6yr3xf	1486504829755850764	445944671441649666	danigol2	Danigol2	2026-04-04 23:53:46.959	2026-04-05 20:10:43.431	t
cmnkmtl2x0000977tcj227xbb	1486504829755850764	586140737767211043	jhadechni	jhadechni	2026-04-04 17:54:19.258	2026-04-05 22:10:13.739	t
cmnlc2u0f000ah47ty8z27ekq	1486504829755850764	1006777841804922940	jhadechniphone	jhadechniphone	2026-04-05 05:41:21.135	2026-04-05 05:41:21.135	f
\.


--
-- Data for Name: ShopWithdrawal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ShopWithdrawal" (id, "guildId", "materialId", quantity, reason, "performedById", "createdAt") FROM stdin;
\.


--
-- Data for Name: Suggestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Suggestion" (id, "guildId", "userId", content, status, "createdAt", "messageId") FROM stdin;
\.


--
-- Data for Name: UserActivity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserActivity" (id, "guildId", "userId", xp, level, "messageCount", "voiceMinutes", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
c984bea9-26a2-4853-b96e-b75ee1713c69	3659a49c203b27baaa4bf13d15cd5aafd716f1272ebd81cf9359026b4b95ed8b	2026-04-04 03:32:52.945299+00	20260325224723_init	\N	\N	2026-04-04 03:32:52.937199+00	1
27b9c47f-d35a-4c9d-b526-f592997dba03	5249aac6505ff656e12792e5dab51e69082709cf2a082a5fae9a93c4eae23d05	2026-04-04 03:32:52.950923+00	20260325230811_init	\N	\N	2026-04-04 03:32:52.94581+00	1
f5ff9aef-5355-486a-ac17-2c50dc47693b	7e5f5d26a109d011288c795be0dd13a93996178dd37ab422f7b5775e353097bd	2026-04-04 03:34:09.317775+00	20260404033409_add_shop_tables	\N	\N	2026-04-04 03:34:09.264412+00	1
48f61481-e217-40f5-8144-0af1fc32c644	1f4d637a44c8dfcf8f9e44185bd145138937d5d274cc556d4d94d2bb744f831b	2026-04-04 22:16:25.076338+00	20260404120000_align_shop_final_model	\N	\N	2026-04-04 22:16:25.039572+00	1
8e405f1d-2cf3-48e0-8a50-897080c4a590	8944eda95e76de1e118eb63a3c96814cf39c8cec5a6f7a8238776956c56d5e92	2026-04-05 03:30:05.439739+00	20260404184500_add_volume_discount_policy_fields	\N	\N	2026-04-05 03:30:05.432961+00	1
30fcb469-e3ac-41ea-a9da-38920c7f180b	7a89799393a670e61805c49dc9957a017844e4343a56cfe62742eacb02e9d521	2026-04-05 21:37:21.685452+00	20260405120000_add_shop_quantity_standardization	\N	\N	2026-04-05 21:37:21.675005+00	1
\.


--
-- Name: FilterWord FilterWord_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FilterWord"
    ADD CONSTRAINT "FilterWord_pkey" PRIMARY KEY (id);


--
-- Name: GuildConfig GuildConfig_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GuildConfig"
    ADD CONSTRAINT "GuildConfig_pkey" PRIMARY KEY (id);


--
-- Name: ModerationLog ModerationLog_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ModerationLog"
    ADD CONSTRAINT "ModerationLog_pkey" PRIMARY KEY (id);


--
-- Name: NicknameRole NicknameRole_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."NicknameRole"
    ADD CONSTRAINT "NicknameRole_pkey" PRIMARY KEY (id);


--
-- Name: RecruitmentTicket RecruitmentTicket_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RecruitmentTicket"
    ADD CONSTRAINT "RecruitmentTicket_pkey" PRIMARY KEY (id);


--
-- Name: Reminder Reminder_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reminder"
    ADD CONSTRAINT "Reminder_pkey" PRIMARY KEY (id);


--
-- Name: ShopAppliedDiscount ShopAppliedDiscount_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopAppliedDiscount"
    ADD CONSTRAINT "ShopAppliedDiscount_pkey" PRIMARY KEY (id);


--
-- Name: ShopDiscountPolicy ShopDiscountPolicy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopDiscountPolicy"
    ADD CONSTRAINT "ShopDiscountPolicy_pkey" PRIMARY KEY (id);


--
-- Name: ShopInventoryMovement ShopInventoryMovement_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventoryMovement"
    ADD CONSTRAINT "ShopInventoryMovement_pkey" PRIMARY KEY (id);


--
-- Name: ShopInventory ShopInventory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventory"
    ADD CONSTRAINT "ShopInventory_pkey" PRIMARY KEY (id);


--
-- Name: ShopMaterial ShopMaterial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopMaterial"
    ADD CONSTRAINT "ShopMaterial_pkey" PRIMARY KEY (id);


--
-- Name: ShopOrderEvent ShopOrderEvent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderEvent"
    ADD CONSTRAINT "ShopOrderEvent_pkey" PRIMARY KEY (id);


--
-- Name: ShopOrderItem ShopOrderItem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderItem"
    ADD CONSTRAINT "ShopOrderItem_pkey" PRIMARY KEY (id);


--
-- Name: ShopOrder ShopOrder_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrder"
    ADD CONSTRAINT "ShopOrder_pkey" PRIMARY KEY (id);


--
-- Name: ShopProductComponent ShopProductComponent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductComponent"
    ADD CONSTRAINT "ShopProductComponent_pkey" PRIMARY KEY (id);


--
-- Name: ShopProductPrice ShopProductPrice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductPrice"
    ADD CONSTRAINT "ShopProductPrice_pkey" PRIMARY KEY (id);


--
-- Name: ShopProduct ShopProduct_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProduct"
    ADD CONSTRAINT "ShopProduct_pkey" PRIMARY KEY (id);


--
-- Name: ShopSale ShopSale_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopSale"
    ADD CONSTRAINT "ShopSale_pkey" PRIMARY KEY (id);


--
-- Name: ShopUser ShopUser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopUser"
    ADD CONSTRAINT "ShopUser_pkey" PRIMARY KEY (id);


--
-- Name: ShopWithdrawal ShopWithdrawal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopWithdrawal"
    ADD CONSTRAINT "ShopWithdrawal_pkey" PRIMARY KEY (id);


--
-- Name: Suggestion Suggestion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suggestion"
    ADD CONSTRAINT "Suggestion_pkey" PRIMARY KEY (id);


--
-- Name: UserActivity UserActivity_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserActivity"
    ADD CONSTRAINT "UserActivity_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: FilterWord_guildId_word_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "FilterWord_guildId_word_key" ON public."FilterWord" USING btree ("guildId", word);


--
-- Name: GuildConfig_guildId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "GuildConfig_guildId_key" ON public."GuildConfig" USING btree ("guildId");


--
-- Name: NicknameRole_guildId_roleId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "NicknameRole_guildId_roleId_key" ON public."NicknameRole" USING btree ("guildId", "roleId");


--
-- Name: ShopInventory_materialId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopInventory_materialId_key" ON public."ShopInventory" USING btree ("materialId");


--
-- Name: ShopMaterial_guildId_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopMaterial_guildId_name_key" ON public."ShopMaterial" USING btree ("guildId", name);


--
-- Name: ShopOrder_orderCode_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopOrder_orderCode_key" ON public."ShopOrder" USING btree ("orderCode");


--
-- Name: ShopProductComponent_productId_materialId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopProductComponent_productId_materialId_key" ON public."ShopProductComponent" USING btree ("productId", "materialId");


--
-- Name: ShopProduct_guildId_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopProduct_guildId_name_key" ON public."ShopProduct" USING btree ("guildId", name);


--
-- Name: ShopSale_orderId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopSale_orderId_key" ON public."ShopSale" USING btree ("orderId");


--
-- Name: ShopUser_guildId_discordUserId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ShopUser_guildId_discordUserId_key" ON public."ShopUser" USING btree ("guildId", "discordUserId");


--
-- Name: UserActivity_guildId_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "UserActivity_guildId_userId_key" ON public."UserActivity" USING btree ("guildId", "userId");


--
-- Name: ShopAppliedDiscount ShopAppliedDiscount_appliedByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopAppliedDiscount"
    ADD CONSTRAINT "ShopAppliedDiscount_appliedByUserId_fkey" FOREIGN KEY ("appliedByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopAppliedDiscount ShopAppliedDiscount_discountPolicyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopAppliedDiscount"
    ADD CONSTRAINT "ShopAppliedDiscount_discountPolicyId_fkey" FOREIGN KEY ("discountPolicyId") REFERENCES public."ShopDiscountPolicy"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopAppliedDiscount ShopAppliedDiscount_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopAppliedDiscount"
    ADD CONSTRAINT "ShopAppliedDiscount_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."ShopOrder"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopAppliedDiscount ShopAppliedDiscount_orderItemId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopAppliedDiscount"
    ADD CONSTRAINT "ShopAppliedDiscount_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES public."ShopOrderItem"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopDiscountPolicy ShopDiscountPolicy_createdByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopDiscountPolicy"
    ADD CONSTRAINT "ShopDiscountPolicy_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopDiscountPolicy ShopDiscountPolicy_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopDiscountPolicy"
    ADD CONSTRAINT "ShopDiscountPolicy_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."ShopProduct"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopInventoryMovement ShopInventoryMovement_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventoryMovement"
    ADD CONSTRAINT "ShopInventoryMovement_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public."ShopMaterial"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopInventoryMovement ShopInventoryMovement_performedById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventoryMovement"
    ADD CONSTRAINT "ShopInventoryMovement_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopInventoryMovement ShopInventoryMovement_relatedOrderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventoryMovement"
    ADD CONSTRAINT "ShopInventoryMovement_relatedOrderId_fkey" FOREIGN KEY ("relatedOrderId") REFERENCES public."ShopOrder"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopInventory ShopInventory_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopInventory"
    ADD CONSTRAINT "ShopInventory_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public."ShopMaterial"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopOrderEvent ShopOrderEvent_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderEvent"
    ADD CONSTRAINT "ShopOrderEvent_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."ShopOrder"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopOrderEvent ShopOrderEvent_performedById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderEvent"
    ADD CONSTRAINT "ShopOrderEvent_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopOrderItem ShopOrderItem_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderItem"
    ADD CONSTRAINT "ShopOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."ShopOrder"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopOrderItem ShopOrderItem_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrderItem"
    ADD CONSTRAINT "ShopOrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."ShopProduct"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopOrder ShopOrder_acceptedByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrder"
    ADD CONSTRAINT "ShopOrder_acceptedByUserId_fkey" FOREIGN KEY ("acceptedByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopOrder ShopOrder_closedByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrder"
    ADD CONSTRAINT "ShopOrder_closedByUserId_fkey" FOREIGN KEY ("closedByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopOrder ShopOrder_customerUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrder"
    ADD CONSTRAINT "ShopOrder_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopOrder ShopOrder_rejectedByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopOrder"
    ADD CONSTRAINT "ShopOrder_rejectedByUserId_fkey" FOREIGN KEY ("rejectedByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopProductComponent ShopProductComponent_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductComponent"
    ADD CONSTRAINT "ShopProductComponent_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public."ShopMaterial"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopProductComponent ShopProductComponent_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductComponent"
    ADD CONSTRAINT "ShopProductComponent_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."ShopProduct"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopProductPrice ShopProductPrice_changedByUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductPrice"
    ADD CONSTRAINT "ShopProductPrice_changedByUserId_fkey" FOREIGN KEY ("changedByUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopProductPrice ShopProductPrice_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProductPrice"
    ADD CONSTRAINT "ShopProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."ShopProduct"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopProduct ShopProduct_baseMaterialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopProduct"
    ADD CONSTRAINT "ShopProduct_baseMaterialId_fkey" FOREIGN KEY ("baseMaterialId") REFERENCES public."ShopMaterial"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ShopSale ShopSale_buyerUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopSale"
    ADD CONSTRAINT "ShopSale_buyerUserId_fkey" FOREIGN KEY ("buyerUserId") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopSale ShopSale_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopSale"
    ADD CONSTRAINT "ShopSale_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."ShopOrder"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopSale ShopSale_registeredById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopSale"
    ADD CONSTRAINT "ShopSale_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopWithdrawal ShopWithdrawal_materialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopWithdrawal"
    ADD CONSTRAINT "ShopWithdrawal_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES public."ShopMaterial"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ShopWithdrawal ShopWithdrawal_performedById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ShopWithdrawal"
    ADD CONSTRAINT "ShopWithdrawal_performedById_fkey" FOREIGN KEY ("performedById") REFERENCES public."ShopUser"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict HvtTYxr8tRuL9RifCiGpoluq8EMN7pgs9xksC7QksyYBkzFXsIdq0Dp6BQ1OkEz

