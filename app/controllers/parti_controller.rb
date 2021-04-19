class PartiController < ApplicationController
  before_action :items
  before_action :recipe_items, only:[:eat_education,:support]
  before_action :name_items, only:[:about, :admission, :belong,  :eat_education, :event, :index, :features, :photo_gallery]
  def about
    @items = {
      link_play: features_parti_index_path(:anchor => "play"),
      link_courtesy: features_parti_index_path(:anchor => "courtesy"),
      link_environment: features_parti_index_path(:anchor => "environment"),
      link_expression: features_parti_index_path(:anchor => "expression"),
      link_together: features_parti_index_path(:anchor => "together"),
      intro_text: '園名である「パルティ道教寺」のパルティは、<br class="pc-tab-only">フランス語のParti<span class="C_text__braces">e</span>（パルティール＝出発する・始まる・スタートを切るの意味<span class="C_text__braces">）</span>から<br class="pc-tab-only">Part<span class="C_text__braces">i</span>（パルティ<span class="C_text__braces">）</span>と発音しやすくシンプルにしたものです。<br class="pc-tab-only">これから始まる輝かしい、未来ある子どもたちの<br class="tab-only">人生のスタート時点にふさわしい環境を整え、<br class="pc-tab-only">集団生活での楽しさと協調性の楽しさを学<span class="C_text__braces">ぶ</span>「人生の門出<span class="C_text__braces">」</span>としたく、<br class="pc-tab-only">またその責任の重さを日々忘れずに<br class="tab-only">子どもたちに接していこうという思いから名づけられたものです。',
      map_1F_length: 8,
      map_2F_length: 5,
      address: '〒597-0033　大阪府貝塚市半田1-3-6　TEL.072-427-8969',
      station: 'JR阪和線 東貝塚駅下車 徒歩2分',
      google_map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13162.036286214505!2d135.3731036!3d34.4392232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd48c9cfe7b368468!2z56S-5Lya56aP56WJ5rOV5Lq6IOS4g-W9qeWtpuiIjg!5e0!3m2!1sja!2sjp!4v1614213618813!5m2!1sja!2sjp'
    }
    @map_items = [
      {title: '1階保育室1', photo: '1F_0'},
      {title: '1階保育室2', photo: '1F_1'},
      {title: '1階保育室3', photo: '1F_2'},
      {title: '1階保育室4', photo: '1F_3'},
      {title: '1階保育室5', photo: '1F_4'},
      {title: '1階保育室6', photo: '1F_5'},
      {title: '1階保育室7', photo: '1F_6'},
      {title: '1階保育室8', photo: '1F_7'},
      {title: '1階保育室9', photo: '1F_8'},
      {title: '2階保育室10', photo: '2F_0'},
      {title: '2階保育室11', photo: '2F_1'},
      {title: '2階保育室12', photo: '2F_2'},
      {title: '2階保育室13', photo: '2F_3'},
      {title: '2階保育室14', photo: '2F_4'},
      {title: '2階保育室15', photo: '2F_5'}
    ]
  end
  def admission
    @items = {
      movie_link: for_admission_parti_index_path(anchor: 'movie'),
      pdf_link: for_admission_parti_index_path,
      pdf_title: '令和2 年度 募集要<span class="C_text__braces">項</span>（PDF<span class="C_text__braces">）</span>',
      one_day_link: one_day_parti_index_path
    }
  end
  def eat_education
    @slider_items = {
      inner_title: false,
      back: false,
      title: 'Photo Gallery',
      img_source: 'eat-education__recipe',
      link: eat_education_parti_index_path,
      content_title: true,
      items: @recipe_items
    }
    @food_staff = [
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      },
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      },
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      }
    ]
  end
  def event
    @season = [
      {
        season_title_en: 'spring',
        season_title_ja: '春',
        season_items: [
          {
            month: '4',
            title: '入園式',
            photo2: ''
          },
          {
            month: '5',
            title: 'こどもの日',
            photo2: ''
          },
          {
            month: '5',
            title: '花まつり',
            photo2: 'ver',
            deco: ['heart1']
          },
          {
            month: '5',
            title: '遠足',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'フェスティバル',
            photo2: 'hor',
            deco: ['triangle1','triangle2']
          },
        ]
      },
      {
        season_title_en: 'summer',
        season_title_ja: '夏',
        season_items: [
          {
            month: '5',
            title: '田植え',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '七夕会',
            photo2: 'hor',
            deco: ['star1','star2']
          },
          {
            month: '5',
            title: '水遊び',
            photo2: 'hor',
            deco: ['bubble1','bubble2']
          },
          {
            month: '5',
            title: 'キャンプ',
            photo2: '',
            deco: []
          }
        ]
      },
      {
        season_title_en: 'autumn',
        season_title_ja: '秋',
        season_items: [
          {
            month: '5',
            title: '縁日ごっこ',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '敬老会',
            photo2: 'ver',
            deco: ['triangle1','triangle2']
          },
          {
            month: '5',
            title: '秋のつどい',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お店屋さんごっこ',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お芋掘り',
            photo2: 'hor',
            deco: ['heart1','heart2']
          },
          {
            month: '5',
            title: '遠足',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '遠足',
            photo2: 'ver',
            deco: ['star1','star2']
          },
          {
            month: '5',
            title: '報恩講',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '親子バイキング',
            photo2: 'hor',
            deco: ['bubble']
          }
        ]
      },
      {
        season_title_en: 'winter',
        season_title_ja: '冬',
        season_items: [
          {
            month: '5',
            title: 'お餅つき',
            photo2: 'hor',
            deco: ['triangle1','triangle2']
          },
          {
            month: '5',
            title: '成道会',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '発表会',
            photo2: 'hor',
            deco: ['music-note1','music-note2']
          },
          {
            month: '5',
            title: '節分',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '涅槃会',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お茶会',
            photo2: 'hor',
            deco: ['star1','star2']
          },
          {
            month: '3',
            title: 'ひな祭り',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '卒園式',
            photo2: '',
            deco: []
          }
        ]
      },
    ]
  end
  def index
    @links = {
      about: about_parti_index_path,
      event: event_parti_index_path,
      eat_education: eat_education_parti_index_path,
      vision: vision_parti_index_path,
      belong: belong_parti_index_path,
      admission: admission_parti_index_path,
      access: about_parti_index_path(:anchor => "access"),
      map: about_parti_index_path(:anchor => "map"),
      info: about_parti_index_path(:anchor => "map"),
      recruit: recruit_parti_index_path,
      support: support_parti_index_path,
      for_admission: for_admission_parti_index_path
    }
    @slider_items = {
      inner_title: true,
      back: true,
      title: 'Photo Gallery',
      img_source: 'photo-gallery__parti__slider',
      link: photo_gallery_parti_index_path,
      content_title: false,
      items: [
        { link: photo_gallery_parti_index_path },
        { link: photo_gallery_parti_index_path },
        { link: photo_gallery_parti_index_path },
        { link: photo_gallery_parti_index_path },
        { link: photo_gallery_parti_index_path },
        { link: photo_gallery_parti_index_path }
      ]
    }
  end
  def support
    @items = {
      title: 'どんぐり',
      title_en: 'DONGURI',
      age: '0、1、2歳児（20組限定）',
      date: '毎月第2・4木曜日　13時30分より',
      span: '5月～2月末まで',
      cost: '1回　200円',
      local: 'パルティ道教寺',
      request: 'パルティ道教寺にて随時受付中'
    }
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    @staff_0 = [
      name:'上村　和美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'0'
    ]
    @staff_img_0 = 'parti__staff_0'
    @staff_1 = [
      name:'篠原　明美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'1'
    ]
    @staff_img_1 = 'parti__staff_1'
    @staff_2 = [
      name:'名前　名前',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'2'
    ]
    @staff_img_2 = 'parti__staff_2'
    @staff_3 = [
      name:'北野　沙織',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'3'
    ]
    @staff_img_3 = 'parti__staff_3'
  end

  def recruit_create
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to recruit_parti_index_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact_recruit).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :recruit
    end
  end

  def name_items
    @name_items = { 
      name_en: 'parti',
      name_en_L: 'Parti',
      name_ja: 'パルティ'
    }
  end

  def recipe_items
    @recipe_items = [
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
    ]
  end
  def items
    @header_items = {
      logo: 'logo-image-parti',
      logo_path: parti_index_path
    }
    @header_lists = [
      {title: '当園について',link: about_parti_index_path},
      {title: '特色',link: features_parti_index_path(anchor: 'play')},
      {title: '年間行事',link: event_parti_index_path},
      {title: '食育',link: eat_education_parti_index_path},
      {title: 'ギャラリー',link: photo_gallery_parti_index_path},
      {title: '理念',link: vision_parti_index_path},
      {title: '入園希望の方へ',link: admission_parti_index_path},
      {title: '就職希望の方へ',link: recruit_parti_index_path},
      {title: '在園の方へ',link: belong_parti_index_path},
    ]
    @footer_item = {logo: 'logo-parti'}
    @footer_lists = [
      {title: '七彩学舎',link: root_path},
      {title: 'ピアニィ道教寺',link: piani_index_path},
      {title: 'お問い合わせ',link: contact_nanairo_index_path},
      {title: '個人情報保護',link: privacy_nanairo_index_path},
      {title: 'サイトポリシー',link: policy_nanairo_index_path}
    ]
    @footer_texts = {
      address: '〒597-0033　大阪府貝塚市半田1-3-6',
      tel: 'TEL 072-427-8969 FAX 072-426-5432',
    }
  end

  private
  
  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
end
